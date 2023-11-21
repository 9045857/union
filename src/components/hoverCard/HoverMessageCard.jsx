import { useState } from 'react';
import { setTopLeftHover } from './hoverCardFunctions';

export const HoverMessageCard = ({
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
        <div
            className={`hover-card ${
                isHoveredIcon || isHoveredCard ? 'visible' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={setTopLeftHover(iconCoordinates, windowWidth)}
        >
            <p className='hover-card-title'>Сообщения</p>
            <span>{0}</span> новых
            <p>Войдите в систему, чтобы посмотреть свои сообщения </p>
        </div>
    );
};
