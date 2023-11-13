import comertial_img_1 from '../../images/commercial/logistics_schemes.png';
import comertial_img_2 from '../../images/commercial/boat.png';

import './commercial.css';

export const Commercial = () => {
    return (
        <>
            <h5 className='commercial-container-title'>Только для вас</h5>
            <a
                href='https://www.sunasiatrans.com/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <div className='commercial-container'>
                    <div className='img-commercial-area left'>
                        <img
                            src={comertial_img_1}
                            alt='comertial_img'
                        />
                    </div>
                    <div className='info-commercial-area'>
                        <h5 className='white-text'>
                            Специализированные поставки из Юго-Восточной Азии
                        </h5>
                        <div className='btn'>
                            <span>Перейти</span>
                        </div>
                    </div>
                    <div className='img-commercial-area right'>
                        <img
                            src={comertial_img_2}
                            alt='comertial_img'
                        />
                    </div>
                </div>
            </a>
        </>
    );
};
