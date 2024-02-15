import styles from './styles.module.scss';
import { Button } from '../Button/Button';
import { Preview } from '../Preview/Preview';
import { useEffect, useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { ProgressBar } from '../ProgressBar/ProgressBar';

// import { initializeApp } from 'firebase/app'; - импортировано в отдельном файле firebase.js
import {
    getStorage,
    uploadBytesResumable,
    ref,
    listAll,
    getDownloadURL,
    getMetadata,
    deleteObject,
} from 'firebase/storage';

import { app } from '../../../firebase';

// const app=initializeApp(firebaseConfig); - инициализированно в отдельном файле firebase.js
const storage = getStorage(app);

export const Upload = () => {
    const inputRef = useRef(null);
    const [images, setImages] = useState([]);

    const getUploadedImages = async () => {
        //ссылка на папку с картинками в БД
        const listRef = ref(storage, 'images/');

        // Find all the prefixes and items.
        const { items } = await listAll(listRef);

        const currentImages = [];

        //заполняем временный массив картинками со стока
        for (const itemRef of items) {
            const url = await getDownloadURL(itemRef);
            const metadata = await getMetadata(itemRef);

            currentImages.push({
                name: metadata.name,
                size: metadata.size,
                url,
                ref: itemRef,
                id: metadata.customMetadata.id,
            });
        }

        setImages(currentImages);
    };

    useEffect(() => {
        getUploadedImages();
    }, []);

    const handleSelect = (e) => {
        //преобразуем файл из псевдомассива в массив
        const files = Array.from(e.target.files);

        //прочитаем файлы
        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = (er) => {
                setImages((prev) => {
                    return [
                        ...prev,
                        {
                            name: file.name,
                            size: file.size,
                            url: reader.result,
                            id: uuidv4(),
                            file,
                        },
                    ];
                });
            };

            reader.readAsDataURL(file);
        });
    };

    const handleDelete = async (image) => {
        if (image.ref) {
            await deleteObject(image.ref);
        }

        setImages((prev) => {
            return prev.filter((_image) => image.id !== _image.id);
        });
    };

    const handleUpload = () => {
        images.forEach((image) => {
            //Нужно понять, что картинка единственная, т.е. еще не загружена в облако.
            if (!image.ref) {
                const storageRef = ref(storage, 'images/' + image.name);
                const uploadTask = uploadBytesResumable(
                    storageRef,
                    image.file,
                    {
                        customMetadata: {
                            id: image.id,
                        },
                    }
                );

                // отловим этапы загрузки для прелоудера через встроеный в uploadTask метод on
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        setImages((prev) => {
                            return prev.map((_image) => {
                                let temp;
                                //в темп, кроме самой картинки, закидываем количество загруженных байт
                                if (_image.id === image.id) {
                                    temp = {
                                        ..._image,
                                        loaded: snapshot.bytesTransferred,
                                    };
                                }
                                //в темп, кроме самой картинки, статус, что картика загружена и ссылку на стоке
                                if (
                                    _image.id === image.id &&
                                    snapshot.bytesTransferred ===
                                        snapshot.totalBytes
                                ) {
                                    temp = {
                                        ...temp,
                                        ref: storageRef,
                                        done: true,
                                    };
                                }
                                // отдаем либо темп, если он отсутствует, то картинку
                                return temp || _image;
                            });
                        });
                    },
                    (error) => console.log(error)
                );
            }
        });
    };

    const getPercentage = () => {
        const filtered = images.filter((image) => image.loaded);

        if (!filtered.length) {
            return 0;
        }

        const currentSize = filtered.reduce((sum, image) => {
            return sum + image.loaded;
        }, 0);

        if (!currentSize) {
            return 0;
        }

        const maxSize = filtered.reduce((sum, image) => {
            return sum + image.size;
        }, 0);

        if (currentSize === maxSize) {
            setImages((prev) => {
                return prev.map((image) => {
                    return {
                        ...image,
                        done: undefined,
                        loaded: undefined,
                    };
                });
            });

            return 0;
        }

        return (currentSize * 100) / maxSize;
    };

    return (
        <div className={styles.upload}>
            <div className={styles.buttons}>
                <input
                    multiple
                    onChange={handleSelect}
                    className={styles.input}
                    ref={inputRef}
                    type='file'
                />
                <Button onClick={() => inputRef.current.click()}>
                    Выбрать
                </Button>
                <Button
                    onClick={() => handleUpload()}
                    theme='primary'
                >
                    Загрузить
                </Button>
            </div>

            <ProgressBar percentage={getPercentage()} />

            {images.length > 0 ? (
                <div className={styles.wrapperPreview}>
                    {images.map((image) => {
                        return (
                            <Preview
                                onDelete={handleDelete}
                                image={image}
                                key={image.id}
                            />
                        );
                    })}
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>Нет данных</div>
            )}
        </div>
    );
};
