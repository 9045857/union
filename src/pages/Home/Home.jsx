import { useState, useEffect } from 'react';
import { getListAllCategories } from '../../api';
import { Preloader } from '../../components/Preloader';
import { CategoriesList } from '../../components/CategoriesList';
import { Search } from '../../components/search/Search';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import { CategoriesProducer } from '../../components/categoris_producer/CategoriesProducer';
import { getFilterByCategory } from '../../api';
import { SamplesContainer } from '../../components/samples_container/SamplesContainer';

import comertial_img_1 from '../../images/commercial/logistics_schemes.png';
import comertial_img_2 from '../../images/commercial/boat.png';

import './home.css';

export const Home = () => {
    const [meals, setMeals] = useState([]);

    const { category, area, ingredient } = useParams();

    //тестово заполним
    useEffect(() => {
        const response = getFilterByCategory('Beef');
        response.then((data) => setMeals(data.meals));
    }, []);

    // useEffect(() => {
    //     const response = category
    //         ? getFilterByCategory(category)
    //         : area
    //         ? getFilterByArea(area)
    //         : getFilterByMainIngredient(ingredient);

    //     response.then((data) => setMeals(data.meals));
    // }, [category, area, ingredient]);

    //
    const [catalog, setCatalog] = useState([]);
    const [fieldCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        str
            ? push({
                  pathname,
                  search: `?search=${str}`,
              })
            : push({
                  pathname,
              });
    };

    useEffect(() => {
        getListAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <CategoriesProducer categories={meals} />

            <div className='clearfix'></div>
            <div className='samples-containers'>
                <SamplesContainer
                    title='Сертифицированные товары'
                    samples={meals}
                />

                <SamplesContainer
                    title='Бесплатные образцы'
                    samples={meals}
                />

                <div className='clearfix'></div>
            </div>

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
                        <p>
                            Логистические задачи любой сложности
                        </p>
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

            {!catalog.length ? (
                <Preloader />
            ) : (
                <>
                    {/* <Search cb={handleSearch} /> */}

                    {fieldCatalog.length ? (
                        <>
                            <h6 className='go-back'>Categories</h6>
                            <CategoriesList categories={fieldCatalog} />
                        </>
                    ) : (
                        <h1 className='product-description'>
                            Nothing searched
                        </h1>
                    )}
                </>
            )}
        </>
    );
};
