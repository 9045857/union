import { Link } from 'react-router-dom';

export const HoverUserCard = () => {
    return (
        <div
            className='hover-card hover-user-card'
            style={{ top: 12, right: 250 }}
        >
            <p>Профиль</p>
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
