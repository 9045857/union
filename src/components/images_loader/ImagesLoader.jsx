import './images_loader.module.scss';
import styles from './images_loader.module.scss';
import { Upload } from './Upload/Upload';

export const ImagesLoader = () => {
    return (
        <div className={styles.container}>
            <Upload />
        </div>
    );
};
