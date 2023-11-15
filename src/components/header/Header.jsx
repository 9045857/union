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
                <div className='enter-registration-label'>
                    <i className=' material-icons'>perm_identity</i>
                    <span className='enter-registration-link'> Войти</span>
                    <span> | </span>
                    <Link to='/join'>
                        <span className='enter-registration-link '>
                            Регистрация
                        </span>
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
