import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../hooks/authorization/AuthContext';
import { setTopLeftHover } from './hoverCardFunctions';

import './hoverCard.css';
import './hoverProfileStyle.css';

export const HoverProfileCard = ({
    isHoveredIcon,
    iconCoordinates,
    windowWidth,
}) => {
    const [isHoveredCard, setIsHoveredCard] = useState(false);
    const { logOut } = useContext(AuthContext);

    const handleMouseEnter = () => {
        setIsHoveredCard(true);
    };

    const handleMouseLeave = () => {
        setIsHoveredCard(false);
    };

    const handleExit = () => {
        logOut();
        setIsHoveredCard(false);
    };

    return (
        <div
            className={`hover-card ${
                isHoveredIcon || isHoveredCard ? 'visible' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={setTopLeftHover(iconCoordinates, windowWidth)}
        >
            <Link to='/user-profile'>
                <div className='hpc-personal-data'>
                    <div className='hpc-personal-photo'>
                        <i className='material-icons'>camera_alt</i>
                    </div>
                    <div className='hpc-personal-info'>
                        <p className='hover-personal-title'>Александр</p>
                        <p className='hover-personal-phone'>+7 913 931 45 56</p>
                        <p className='hover-personal-page-link'>
                            Личные данные
                        </p>
                    </div>
                </div>
            </Link>

            <p className='hpc-spacer'> </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>local_shipping</i>
                Доставки
            </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>monetization_on</i>
                Баланс 0 ₽
            </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>payment</i>
                Способы оплаты
            </p>
            <p className='hpc-spacer'> </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>star</i> Избранное
            </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>devices_other</i> Покупки
            </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>location_city</i>
                Любимые производители
            </p>
            <p className='hpc-spacer'> </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>style</i>Чеки
            </p>
            <p className='hpc-section-name'>
                <i className='material-icons'>work</i>Коммерческие предложения
            </p>
            <p className='hpc-spacer'> </p>
            <p className='hpc-section-name without-icon'>
                Обращения и проверка товара
            </p>
            <p className='hpc-section-name without-icon'>Возвраты</p>
            <p className='hpc-section-name without-icon'>Отзывы и вопросы</p>
            <p className='hpc-spacer hpc-last-spacer'> </p>

            <Link to='/'>
                <p
                    className='hpc-section-name without-icon'
                    onClick={handleExit}
                >
                    Выйти
                </p>
            </Link>
        </div>
    );
};
