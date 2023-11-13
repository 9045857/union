import React, { useState, useEffect } from 'react';
import { CategoryProducer } from './CategoryProducer';

export const Carousel = ({ categories = [] }) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [isLeftBtnHidden, setIsLeftBtnVisible] = useState(false);
    const [isRightBtnHidden, setIsRightBtnVisible] = useState(false);

    useEffect(() => {
        updateCardWidth();
        updateButtonState();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => {
        updateCardWidth();
        updateButtonState();
    };

    const updateCardWidth = () => {
        const firstCard = document.querySelector(
            '.categories-producer-block > .card-producer-link > div'
        );

        if (firstCard) {
            setCardWidth(() => firstCard.offsetWidth);
        } else {
            console.log('не нашел карту');
        }
    };

    const moveCarousel = (direction) => {
        const maxPosition = 0;
        const minPosition = -(
            document.querySelector('.categories-producer-block').scrollWidth -
            document.querySelector('.categories-producer-block').clientWidth
        );

        if (direction === 'left' && currentPosition < maxPosition) {
            setCurrentPosition(() => currentPosition + cardWidth);
        } else if (direction === 'right' && currentPosition > minPosition) {
            setCurrentPosition(() => currentPosition - cardWidth);
        }

        updateButtonState();
    };

    const updateButtonState = () => {
        const maxPosition = 0;
        const minPosition = -(
            document.querySelector('.categories-producer-block').scrollWidth -
            document.querySelector('.categories-producer-block').clientWidth
        );

        const prevBtnDisabled =
            currentPosition === maxPosition || currentPosition > maxPosition;
        document.getElementById('prevBtn').disabled = prevBtnDisabled;
        setIsLeftBtnVisible(prevBtnDisabled);

        const nextBtnDisabled =
            currentPosition === minPosition || currentPosition < minPosition;
        document.getElementById('nextBtn').disabled = nextBtnDisabled;
        setIsRightBtnVisible(nextBtnDisabled);
    };

    return (
        <div className='carousel'>
            <dir
                className={`btn-categories-block left ${
                    isLeftBtnHidden ? 'visually-hidden' : ''
                }`}
                id='prevBtn'
                onClick={() => moveCarousel('left')}
            >
                <i className='material-icons'>chevron_left</i>
            </dir>
            <dir
                className={`btn-categories-block right ${
                    isRightBtnHidden ? 'visually-hidden' : ''
                }`}
                id='nextBtn'
                onClick={() => moveCarousel('right')}
            >
                <i className='material-icons'>chevron_right</i>
            </dir>

            <dir className='categories-producer-block'>
                {categories.slice(0, 17).map((category) => (
                    <CategoryProducer
                        key={category.idMeal}
                        {...category}
                        left={currentPosition}
                    />
                ))}
            </dir>
        </div>
    );
};
