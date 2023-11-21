import { useState, useEffect } from 'react';
import { setTopLeftHover } from './hoverCardFunctions';

export const HoverCartCard = ({
    isHoveredIcon,
    iconCoordinates,
    windowWidth,
}) => {
    const [isHoveredCard, setIsHoveredCard] = useState(false);

    const handleMouseEnter = () => {
        setIsHoveredCard(true);
    };

    const handleMouseLeave = () => {
        setIsHoveredCard(false);
    };

    return (
        <>
            <div
                className={`hover-card  ${
                    isHoveredIcon || isHoveredCard ? 'visible' : ''
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={setTopLeftHover(iconCoordinates, windowWidth)}
            >
                <p className='hover-card-title'>Корзина</p>
                <p>Для совершения покупки, необходимо зайти в систему.</p>
            </div>
        </>
    );
};
