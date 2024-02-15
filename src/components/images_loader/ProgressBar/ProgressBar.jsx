import styles from './styles.module.scss';

export const ProgressBar = ({ percentage }) => {
    return (
        <div className={styles.progressBar}>
            <span>{Math.floor(percentage)}%</span>
            <div
                style={{ width: percentage + '%' }}
                className={styles.percentage}
            ></div>
        </div>
    );
};
