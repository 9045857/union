import React, { useState } from 'react';

import { HoverUserCard } from './HoverUserCard';
import { HoverCartCard } from './HoverCartCard';
import { HoverMessageCard } from './HoverMessageCard';
import { HoverOrdersCard } from './HoverOrdersCard';
import { HoverProfileCard } from './HoverProfileCard';

import './hoverCard.css'; // Создайте файл стилей HoverCard.css

export const HoverCard = ({ isHoveredIcon, iconType, iconCoordinates }) => {
    const [isHoveredCard, setIsHoveredCard] = useState(false);

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

    let componentToRender;

    console.log(iconType);

    switch (iconType) {
        case 'USER':
            componentToRender = <HoverUserCard />;
            break;
        case 'MESSAGE':
            componentToRender = <HoverMessageCard />;
            break;
        case 'ORDERS':
            componentToRender = <HoverOrdersCard />;
            break;
        case 'CART':
            componentToRender = <HoverCartCard />;
            break;
        case 'PROFILE':
            componentToRender = (
                <HoverProfileCard iconCoordinates={iconCoordinates} />
            );
            break;

        default:
            componentToRender = <div>Default Component</div>;
    }

    const handleMouseEnter = () => {
        setIsHoveredCard(true);
    };

    const handleMouseLeave = () => {
        setIsHoveredCard(false);
    };

    return (
        <div
            className={`hover-card-container hover-card-centered ${
                true||isHoveredIcon || isHoveredCard ? 'visible' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={elementStyle}
        >
            {componentToRender}
        </div>
    );
};
