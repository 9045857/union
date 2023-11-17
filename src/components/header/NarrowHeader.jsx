import { Link } from 'react-router-dom';

import { Search } from '../search/Search';
import { SearchTypeSelection } from '../search_type_selection/SearchTypeSelection';

import { SmallLogo } from './SmallLogo';

import './narrowHeader.css';

function NarrowHeader() {
    return (
        <>
            <div className='nh-top-line #ec407a pink lighten-1'>
                <SmallLogo />
                <div className='main-search'>
                    <SearchTypeSelection cb={''} />
                    <Search cb={'handleSearch'} />
                </div>
                <div className='nh-icons-area'>
                    <div className='nh-header-market-section'>
                        <Link to='/login'>
                            <i className=' material-icons nh-header-market-icon'>
                                perm_identity
                            </i>

                            <p className='nh-header-market-title'>Профиль</p>
                        </Link>
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
                <nav className='#ffffff white'></nav>
            </div>
        </>
    );
}

export { NarrowHeader };
