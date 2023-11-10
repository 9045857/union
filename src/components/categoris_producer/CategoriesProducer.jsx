//import { useState } from 'react';
import { CatogoryProducer } from './CategoryProducer';
import './catogoriesProducer.css';

export const CategoriesProducer = ({ categories = [] }) => {
    //const [categories, setCategories] = useState([]);

    return (
        <>
            <div className='catogories-producer-container'>
                <dir>
                    <h6>Искать поставщиков по категориям</h6>
                </dir>
                <dir className='catogories-producer-block'>
                    {categories.slice(0, 7).map((category) => (
                        <CatogoryProducer
                            key={category.idMeal}
                            {...category}
                        />
                    ))}
                </dir>
            </div>
        </>
    );
};
