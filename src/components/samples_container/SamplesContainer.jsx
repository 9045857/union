import { useState, useEffect } from 'react';
import { Sample } from './Sample';
import './samplesContainer.css';

//компнент показывает 4 элемента из массива в отдельном блоке
export const SamplesContainer = ({ title = '', samples = [] }) => {
    //const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     console.log(samples);
    // }, [samples]);

    // метод при загрузке выбирирает 4 случаных элемента из массива
    useEffect(() => {
        const arrayLenght = samples.length;
        //TODO сделать случайное наполнение массива из сэмлов. Случайную цену, но что бы она не менялась. заполнить массив объектов.
    }, [samples]);

    return (
        <>

            <div className='samples-container'>
                <dir className='samples-container-title'>
                    <h6>{title}</h6>
                </dir>
                <dir className='sample-container'>
                    {samples.slice(0, 4).map((sample) => (
                        <Sample
                            key={sample.idMeal}
                            {...sample}
                            price={`${3 + Math.floor(Math.random() * 35)} руб.`}
                        />
                    ))}
                </dir>
            </div>
          </>
    );
};
