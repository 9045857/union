import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { Search } from '../search/Search';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import logoImage from '../../images/logo/logo-chemical-union.png';

import { HoverCard } from '../../components/hoverCard/HoverCard';
import './wideHeader.css';

function WideHeader() {
    const [isHovered, setIsHovered] = useState(false);
    const [iconType, setIconType] = useState('');

    const handleMouseEnter = (icon_type) => {
        setIsHovered(true);
        setIconType(icon_type);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // setIconType('');
    };
    return (
        <>
            <div className='top-line #ec407a pink lighten-1'>
                <div className='icons-area'>
                    <div className='enter-registration-label'>
                        <div className='user-icon-area'>
                            <i
                                className=' material-icons header-market-icon person-icon'
                                onMouseEnter={() => handleMouseEnter('USER')}
                                onMouseLeave={handleMouseLeave}
                            >
                                perm_identity
                            </i>
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
                    <Link
                        to='/join'
                        className='header-market-icon'
                    >
                        <i
                            className=' material-icons'
                            onMouseEnter={() => handleMouseEnter('MESSAGE')}
                            onMouseLeave={handleMouseLeave}
                        >
                            email
                        </i>
                    </Link>
                    <Link
                        to='/join'
                        className='header-market-icon'
                    >
                        <i
                            className=' material-icons'
                            onMouseEnter={() => handleMouseEnter('ORDERS')}
                            onMouseLeave={handleMouseLeave}
                        >
                            local_shipping
                        </i>
                    </Link>
                    <Link
                        to='/join'
                        className='header-market-icon'
                    >
                        <i
                            className=' material-icons header-market-icon'
                            onMouseEnter={() => handleMouseEnter('CART')}
                            onMouseLeave={handleMouseLeave}
                        >
                            shopping_cart
                        </i>
                    </Link>
                    {/* <HoverCard
                        isHoveredIcon={isHovered}
                        iconType={iconType}
                    /> */}
                </div>
                <HoverCard
                    isHoveredIcon={isHovered}
                    iconType={iconType}
                />
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
