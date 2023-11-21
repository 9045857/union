import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

import { SmallSearch } from '../search/SmallSearch';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import { HoverCard } from '../hoverCard/HoverCard';

import { SmallLogo } from './SmallLogo';

import './narrowHeader.css';

function NarrowHeader() {
    const iconRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [iconType, setIconType] = useState('');
    const [iconCoordinates, setIconCoordinates] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });

    const handleMouseEnter = (icon_type) => {
        setIsHovered(true);
        setIconType(icon_type);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // setIconType('');
    };

    useEffect(() => {
        const iconElement = iconRef.current;
        if (iconElement) {
            const rect = iconElement.getBoundingClientRect();
            console.log('Top:', rect.top);
            console.log('Left:', rect.left);
            console.log('Bottom:', rect.bottom);
            console.log('Right:', rect.right);

            setIconCoordinates(() => {
                return {
                    top: rect.top,
                    left: rect.left,
                    bottom: rect.bottom,
                    right: rect.right,
                };
            });

            // console.log('iconCoordinates.Top:', iconCoordinates.top);
            // console.log('iconCoordinates.Left:', iconCoordinates.left);
            // console.log('iconCoordinates.Bottom:', iconCoordinates.bottom);
            // console.log('iconCoordinatesRight:', iconCoordinates.right);
        }
    }, []); // Вызовется один раз при монтировании

    return (
        <>
            <div className='nh-top-line #ec407a pink lighten-1'>
                <div className='nh-small-logo'>
                    <SmallLogo />
                </div>
                <div className='main-search'>
                    {/* <SearchTypeSelection cb={''} /> */}
                    <SmallSearch cb={'handleSearch'} />
                </div>
                <div className='nh-icons-area'>
                    <div
                        className='nh-header-market-section nh-header-market-section-profile'
                        ref={iconRef}
                        onMouseEnter={() => handleMouseEnter('PROFILE')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to='/login'>
                            <i className=' material-icons nh-header-market-icon'>
                                perm_identity
                            </i>

                            <p className='nh-header-market-title'>Профиль</p>
                        </Link>
                        <HoverCard
                            isHoveredIcon={isHovered}
                            iconType={iconType}
                            iconCoordinates={iconCoordinates}
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
