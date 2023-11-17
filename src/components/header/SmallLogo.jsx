import { Link } from 'react-router-dom';
import './smallLogo.css'; // Замените на имя вашего файла стилей

import logoTextWhiteImage from '../../images/logo/logo-text-white.png';
import logoPicImage from '../../images/logo/pic-logo-white.png';

export function SmallLogo() {
    return (
        <Link
            to='/'
            className='nh-brand-logo'
        >
            <div className='nh-logo-container'>
                <img
                    src={logoPicImage}
                    alt='logo'
                    className='nh-logo-pic-image'
                />
                <div>
                    <div className='nh-slogan'>world trade area</div>
                </div>
                <img
                    src={logoTextWhiteImage}
                    alt='logo'
                    className='nh-logo-text'
                />
            </div>
        </Link>
    );
}
