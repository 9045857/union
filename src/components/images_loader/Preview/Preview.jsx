import styles from './styles.module.scss';

function bytesToSize(bytes, precision = 2) {
    if (bytes === 0) return '0 Байт';
    const units = ['Байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
        (bytes / Math.pow(1024, index)).toFixed(precision) + ' ' + units[index]
    );
}

export const Preview = ({ image, onDelete }) => {
    const { url, size, name } = image;

    return (
        <div className={styles.preview}>
            {image.ref && <div className={styles.badge}>Загружено</div>}

            <span
                onClick={() => onDelete(image)}
                className={styles.cross}
            >
                x
            </span>

            <img
                className={styles.image}
                src={url}
                alt={url}
            />

            <div className={styles.text}>{name}</div>
            <div className={styles.size}>{bytesToSize(size)}</div>
        </div>
    );
};
