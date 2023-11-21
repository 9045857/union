import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

import { SmallSearch } from '../search/SmallSearch';

import { HoverProfileCard } from '../hoverCard/HoverProfileCard';

import { SmallLogo } from './SmallLogo';

import './narrowHeader.css';

function setCoordinates(iconUserRef, setIconCoordinates) {
    const iconElement = iconUserRef.current;
    if (iconElement) {
        const rect = iconElement.getBoundingClientRect();

        setIconCoordinates(() => {
            return {
                top: rect.top,
                left: rect.left,
                bottom: rect.bottom,
                right: rect.right,
            };
        });
    }
}

const zero = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

function NarrowHeader() {
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [iconProfileCoordinates, setIconProfileCoordinates] = useState(zero);

    const iconProfileRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(
        document.documentElement.clientWidth
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(document.documentElement.clientWidth);

            setCoordinates(iconProfileRef, setIconProfileCoordinates);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsProfileHovered(true);
    };

    const handleMouseLeave = () => {
        setIsProfileHovered(false);
    };

    return (
        <>
            <div className='nh-top-line #ec407a pink lighten-1'>
                <div className='nh-small-logo'>
                    <SmallLogo />
                </div>
                <div className='nh-main-search'>
                    <SmallSearch cb={'handleSearch'} />
                </div>
                <div className='nh-icons-area'>
                    <div
                        className='nh-header-market-section nh-header-market-section-profile'
                        ref={iconProfileRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to='/login'>
                            <i className=' material-icons nh-header-market-icon'>
                                perm_identity
                            </i>

                            <p className='nh-header-market-title'>Профиль</p>
                        </Link>
                        <HoverProfileCard
                            isHoveredIcon={isProfileHovered}
                            iconCoordinates={iconProfileCoordinates}
                            windowWidth={windowWidth}
                        />
                    </div>
                    <div className='nh-header-market-section'>
                        <Link to='/join'>
                            <i className=' material-icons nh-header-market-icon'>
                                email
                            </i>

                            <p className='nh-header-market-title'>Сообщения</p>
                        </Link>
                    </div>
                    <div className='nh-header-market-section'>
                        <Link to='/join'>
                            <i className=' material-icons nh-header-market-icon'>
                                local_shipping
                            </i>
                            <p className='nh-header-market-title'>Доставка</p>
                        </Link>
                    </div>
                    <div className='nh-header-market-section'>
                        <Link to='/join'>
                            <i className=' material-icons nh-header-market-icon'>
                                shopping_cart
                            </i>
                            <p className='nh-header-market-title'>Корзина</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=''>
                <nav className='nh-nav #ffffff white'></nav>
            </div>
        </>
    );
}

export { NarrowHeader };
