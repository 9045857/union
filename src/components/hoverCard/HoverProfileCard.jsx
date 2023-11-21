import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setTopLeftHover } from './hoverCardFunctions';

import './hoverCard.css';

export const HoverProfileCard = ({
    isHoveredIcon,
    iconCoordinates,
    windowWidth,
}) => {
    // console.log('top: ' + iconCoordinates.bottom);
    // console.log('left: ' + iconCoordinates.left);

    // const hoverTopCompensation = 15;
    // let hoverTop =
    //     iconCoordinates.bottom - iconCoordinates.top + hoverTopCompensation;

    // let hoverLeft =
    //     iconCoordinates.left <
    //     Math.abs(-150 + (iconCoordinates.right - iconCoordinates.left) / 2)
    //         ? -iconCoordinates.left
    //         : -150 + (iconCoordinates.right - iconCoordinates.left) / 2;

    // const elementStyle = {
    //     top: `${hoverTop}px`,
    //     left: `${hoverLeft}px`,
    // };
    const [isHoveredCard, setIsHoveredCard] = useState(false);

    const handleMouseEnter = () => {
        setIsHoveredCard(true);
    };

    const handleMouseLeave = () => {
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
