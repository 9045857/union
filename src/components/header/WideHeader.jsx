import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import { Search } from '../search/Search';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import logoImage from '../../images/logo/logo-chemical-union.png';

import { HoverUserCard } from '../../components/hoverCard/HoverUserCard';
import { HoverCartCard } from '../../components/hoverCard/HoverCartCard';
import { HoverMessageCard } from '../../components/hoverCard/HoverMessageCard';
import { HoverOrdersCard } from '../../components/hoverCard/HoverOrdersCard';
import './wideHeader.css';

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

function WideHeader() {
    const [isUserHovered, setIsUserHovered] = useState(false);
    const [isOrdersHovered, setIsOrdersHovered] = useState(false);
    const [isMessageHovered, setIsMessageHovered] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);

    const iconUserRef = useRef(null);
    const iconOrdersRef = useRef(null);
    const iconMessageRef = useRef(null);
    const iconCartRef = useRef(null);

    const [iconUserCoordinates, setIconUserCoordinates] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });
    const [iconOrdersCoordinates, setIconOrdersCoordinates] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });
    const [iconMessageCoordinates, setIconMessageCoordinates] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });
    const [iconCartCoordinates, setIconCartCoordinates] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    });

    const [windowWidth, setWindowWidth] = useState(
        document.documentElement.clientWidth
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(document.documentElement.clientWidth);

            setCoordinates(iconUserRef, setIconUserCoordinates);
            setCoordinates(iconOrdersRef, setIconOrdersCoordinates);
            setCoordinates(iconMessageRef, setIconMessageCoordinates);
            setCoordinates(iconCartRef, setIconCartCoordinates);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (icon_type) => {
        switch (icon_type) {
            case 'USER':
                setIsUserHovered(true);

                break;
            case 'MESSAGE':
                setIsMessageHovered(() => true);

                break;
            case 'ORDERS':
                setIsOrdersHovered(() => true);

                break;
            case 'CART':
                setIsCartHovered(() => true);

                break;
            default:
                return null;
        }
    };

    const handleMouseLeave = (icon_type) => {
        switch (icon_type) {
            case 'USER':
                setIsUserHovered(false);
                break;
            case 'MESSAGE':
                setIsMessageHovered(() => false);
                break;
            case 'ORDERS':
                setIsOrdersHovered(() => false);
                break;
            case 'CART':
                setIsCartHovered(() => false);
                break;
            default:
                return null;
        }
    };
    return (
        <>
            <div className='top-line #ec407a pink lighten-1'>
                <div className='icons-area'>
                    <div className='enter-registration-label'>
                        <div
                            className='user-icon-area'
                            ref={iconUserRef}
                        >
                            <i
                                className=' material-icons header-market-icon person-icon absolute-icon'
                                onMouseEnter={() => handleMouseEnter('USER')}
                                onMouseLeave={() => handleMouseLeave('USER')}
                            >
                                perm_identity
                            </i>
                            <HoverUserCard
                                isHoveredIcon={isUserHovered}
                                iconCoordinates={iconUserCoordinates}
                                windowWidth={windowWidth}
                            />
                        </div>
                        <Link to='/login'>
                            <span className='enter-registration-link'>
                                Войти
                            </span>
                        </Link>
                        <span> | </span>
                        <Link to='/join'>
                            <span className='enter-registration-link '>
                                Регистрация
                            </span>
                        </Link>
                    </div>
                    <span className='spacer'>{'  '}</span>
                    <div className='wh-icon-hover-area'>
                        <Link
                            to='/join'
                            className='header-market-icon'
                        >
                            <i
                                className=' material-icons'
                                onMouseEnter={() => handleMouseEnter('MESSAGE')}
                                onMouseLeave={() => handleMouseLeave('MESSAGE')}
                                ref={iconMessageRef}
                            >
                                email
                            </i>
                        </Link>
                        <HoverMessageCard
                            isHoveredIcon={isMessageHovered}
                            iconCoordinates={iconMessageCoordinates}
                            windowWidth={windowWidth}
                        />
                    </div>
                    <div className='wh-icon-hover-area'>
                        <Link
                            to='/join'
                            className='header-market-icon'
                        >
                            <i
                                className=' material-icons'
                                onMouseEnter={() => handleMouseEnter('ORDERS')}
                                onMouseLeave={() => handleMouseLeave('ORDERS')}
                                ref={iconOrdersRef}
                            >
                                local_shipping
                            </i>
                        </Link>
                        <HoverOrdersCard
                            isHoveredIcon={isOrdersHovered}
                            iconCoordinates={iconOrdersCoordinates}
                            windowWidth={windowWidth}
                        />
                    </div>
                    <div className='wh-icon-hover-area'>
                        <Link
                            to='/join'
                            className='header-market-icon'
                        >
                            <i
                                className=' material-icons header-market-icon'
                                onMouseEnter={() => handleMouseEnter('CART')}
                                onMouseLeave={() => handleMouseLeave('CART')}
                                ref={iconCartRef}
                            >
                                shopping_cart
                            </i>
                        </Link>
                        <HoverCartCard
                            isHoveredIcon={isCartHovered}
                            iconCoordinates={iconCartCoordinates}
                            windowWidth={windowWidth}
                        />
                    </div>
                </div>
            </div>

            <div className=''>
                <nav className='wh-nav #ffffff white'>
                    <Link
                        to='/'
                        className='brand-logo'
                    >
                        <div className='logo-container'>
                            <img
                                src={logoImage}
                                alt='logo'
                            />
                            <div className='slogan'>world trade area</div>
                        </div>
                    </Link>

                    <div className='main-search'>
                        <SearchTypeSelection cb={''} />
                        <Search cb={'handleSearch'} />
                    </div>
                </nav>
            </div>
        </>
    );
}

export { WideHeader };
