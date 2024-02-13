import { useState } from 'react';

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { uploadImage } from '../actions/userActions'; // Импортируйте ваш Redux action

// import ImageUploader from './ImageUploader'; // Ваш компонент для загрузки изображения

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // const dispatch = useDispatch();
    // const userImage = useSelector((state) => state.userReducer.userImage);

    // // Функция, вызываемая при выборе и загрузке изображения
    // const handleImageUpload = (imageFile) => {
    //     // Вызываем Redux action для загрузки изображения
    //     dispatch(uploadImage(imageFile));
    // };

    return (
        <div>
            {/* <div>
                <h1>User Profile</h1>
                <ImageUploader onImageSelect={handleImageUpload} />
                {userImage && (
                    <img
                        src={userImage}
                        alt='User'
                    />
                )}
            </div> */}
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
            />

            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
            />

            <button onClick={() => handleClick(email, pass)}>{title}</button>
        </div>
    );
};

export { Form };
