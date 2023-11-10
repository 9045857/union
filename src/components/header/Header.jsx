import { Link } from 'react-router-dom';
import { Menu } from '../Menu';

import { Search } from '../search/Search';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import logoImage from '../../images/logo-chemical-union.png';

import './header.css';

function Header() {
    return (
        <>
            <Menu />
            <div className='top-line #ec407a pink lighten-1'>
                <div className='enter-registration-label'>
                    <i className=' material-icons'>perm_identity</i>
                    <span className='enter-registration-link'> Войти</span>
                    <span> | </span>
                    <span className='enter-registration-link'>Регистрация</span>
                </div>
            </div>
            <div className=''>
                {/* #e8eaf6 indigo lighten-5 */}
                <nav className='#ffffff white'>
                    {/* nav-wrapper */}
                    <Link
                        to='/'
                        className='brand-logo'
                    >
                        <img
                            src={logoImage}
                            alt='logo dfdf'
                        />
                    </Link>

                    <div className='main-search'>
                        <SearchTypeSelection cb={''} />
                        <Search cb={'handleSearch'} />
                    </div>

                    <ul
                        id='nav-mobile'
                        className='right hide-on-med-and-down'
                    >
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export { Header };
