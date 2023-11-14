import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';

export const ProductCard = (props) => {
    const {
        photo = props.strCategoryThumb,
        // fullTitle = props.strCategory,
        link = props.strCategory,
        fullTitle = props.strCategoryDescription,
        title = props.strCategoryDescription,
        price = '10.50 руб.',
        minOrder = '10 kg',
    } = props;

    const truncatedTitle =
        title.length > 40 ? `${title.slice(0, 40)}...` : title;

    const handleButtonClick = (event) => {
        event.preventDefault(); // Остановка действия по умолчанию

        // Ваши действия по нажатию на кнопку
        console.log('Button clicked!');
    };

    return (
        <Link
            to={`/category/${link}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className='product-card card'>
                <img
                    className='product-photo card-image'
                    src={photo}
                    alt={title}
                />
                <div className='product-details'>
                    <div
                        className='product-title card-content'
                        title={fullTitle}
                    >
                        {truncatedTitle}
                    </div>
                    <div className='product-price'>{price}</div>
                    <div className='min-order'>{`Мин. заказ: ${minOrder}`}</div>
                </div>
                <button
                    className='add-to-cart-button #ec407a pink lighten-1 waves-effect waves-light btn-small'
                    onClick={handleButtonClick}
                >
                    В корзину
                </button>
            </div>
        </Link>
    );
};
