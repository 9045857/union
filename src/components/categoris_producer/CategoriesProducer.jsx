import { useState } from 'react';
import { CatogoryProducer } from './CategoryProducer';
import './catogoriesProducer.css';

export const CategoriesProducer = ({ categories = [] }) => {
    //const [categories, setCategories] = useState([]);
    const [categoryBlockLeftPosition, setcategoryBlockLeftPosition] =
        useState(0);

    const offsetStep = 80;

    return (
        <>
            <div className='categories-producer-container'>
                <dir className='categories-producer-container-title'>
                    <h6>Искать поставщиков по категориям</h6>
                </dir>
                <dir
                    className='btn-categories-block left '
                    onClick={() =>
                        setcategoryBlockLeftPosition(
                            (prev) => prev - offsetStep
                        )
                    }
                >
                    <i className='material-icons'>chevron_left</i>
                </dir>
                <dir
                    className='btn-categories-block right'
                    onClick={() =>
                        setcategoryBlockLeftPosition(
                            (prev) => prev + offsetStep
                        )
                    }
                >
                    <i className='material-icons'>chevron_right</i>
                </dir>

                <dir className='categories-producer-block'>
                    {categories.slice(0, 7).map((category) => (
                        <CatogoryProducer
                            key={category.idMeal}
                            {...category}
                            left={`${categoryBlockLeftPosition}px`}
                        />
                    ))}
                </dir>
            </div>
        </>
    );
};
