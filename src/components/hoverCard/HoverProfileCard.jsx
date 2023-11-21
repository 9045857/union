import { Link } from 'react-router-dom';

export const HoverProfileCard = ({ iconCoordinates }) => {
    console.log('top: ' + iconCoordinates.bottom);
    console.log('left: ' + iconCoordinates.left);

    const hoverTopCompensation = 15;
    let hoverTop =
        iconCoordinates.bottom - iconCoordinates.top + hoverTopCompensation;

    let hoverLeft =
        iconCoordinates.left <
        Math.abs(-150 + (iconCoordinates.right - iconCoordinates.left) / 2)
            ? -iconCoordinates.left
            : -150 + (iconCoordinates.right - iconCoordinates.left) / 2;

    const elementStyle = {
        top: `${hoverTop}px`,
        left: `${hoverLeft}px`,
    };

    return (
        <div
            className='hover-card hover-user-card'
            // style={elementStyle}
        >
            <p className='hover-card-title'>Профиль</p>
            <p>Для оформления заказов, нужно войти в систему</p>
            <Link to='/login'>
                <button className='btn-hover-user-card login cu-btn-pink '>
                    Войти
                </button>
            </Link>

            <p>или зарегистрироваться</p>
            <Link to='/join'>
                <button className='btn-hover-user-card auth cu-btn-pink '>
                    Зарегистрироваться
                </button>
            </Link>
        </div>
    );
};
