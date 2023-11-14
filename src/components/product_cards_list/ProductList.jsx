import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard'; // Подставьте свой компонент для карточки товара

export const ProductsList = ({ initialProducts = [] }) => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(5); // Начальное количество видимых товаров

    useEffect(() => {
        // Имитация загрузки данных при монтировании компонента
        setProducts(initialProducts);
        //eslint-disable-next-line
    }, []);
    // initialProducts;

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 10 >
            document.documentElement.offsetHeight
        ) {
            // Когда пользователь достигает конца страницы (+10px для гарантии), загружаем следующий набор товаров
            const nextVisibleProducts = visibleProducts + 5; // Увеличиваем количество видимых товаров
            setVisibleProducts(nextVisibleProducts);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Очистка слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        //eslint-disable-next-line
    }, [visibleProducts]);

    return (
        <div>
            {products.slice(0, visibleProducts).map((product) => (
                <ProductCard
                    key={product.strCategory}
                    {...product}
                />
            ))}
        </div>
    );
};
