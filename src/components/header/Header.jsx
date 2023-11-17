import { Link } from 'react-router-dom';
import { Menu } from '../Menu';

import { Search } from '../search/Search';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import logoImage from '../../images/logo-chemical-union.png';

import './header.css';

function Header() {
    return (
        <>
            {/* <Menu /> */}
            <div className='top-line #ec407a pink lighten-1'>
                <div className='icons-area'>
                    <div className='enter-registration-label'>
                        <i className=' material-icons header-market-icon person-icon'>
                            perm_identity
                        </i>
                        <Link to='/login '>
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
                        <i className=' material-icons'>email</i>
                    </Link>
                    <Link
                        to='/join'
                        className='header-market-icon'
                    >
                        <i className=' material-icons'>local_shipping</i>
                    </Link>
                    <Link
                        to='/join'
                        className='header-market-icon'
                    >
                        <i className=' material-icons header-market-icon'>
                            shopping_cart
                        </i>
                    </Link>
                </div>
            </div>
            <div className=''>
                <nav className='#ffffff white'>
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

                    {/* <ul
                        id='nav-mobile'
                        className='right hide-on-med-and-down'
                    >
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul> */}
                </nav>
            </div>
        </>
    );
}

export { Header };
