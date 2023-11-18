import React, { useState } from 'react';

import { HoverUserCard } from './HoverUserCard';
import { HoverCartCard } from './HoverCartCard';
import { HoverMessageCard } from './HoverMessageCard';
import { HoverOrdersCard } from './HoverOrdersCard';
import './hoverCard.css'; // Создайте файл стилей HoverCard.css

export const HoverCard = ({ isHoveredIcon, iconType }) => {
    const [isHoveredCard, setIsHoveredCard] = useState(false);

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
                isHoveredIcon || isHoveredCard ? 'visible' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {componentToRender}
        </div>
    );
};
