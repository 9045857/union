import { useState, useEffect } from 'react';
import { getListAllCategories } from '../../api';
import { Preloader } from '../../components/Preloader';
import { CategoriesList } from '../../components/CategoriesList';
import { Search } from '../../components/search/Search';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import { CategoriesProducer } from '../../components/categoris_producer/CategoriesProducer';
import { getFilterByCategory } from '../../api';
import { SamplesContainer } from '../../components/samples_container/SamplesContainer';
import { Commercial } from '../../components/commercial/Commercial';

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

            <Commercial />

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
