import React, { useEffect, useState } from 'react';
import './scrollToTopButton.css'; // Создайте стиль по вашему вкусу

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            &#x25B2;
        </div>
    );
};
