import { useState, useEffect } from 'react';
import { Sample } from './Sample';
import './samplesContainer.css';

//компнент показывает 4 элемента из массива в отдельном блоке
export const SamplesContainer = ({ title = '', samples = [] }) => {
    //const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    function getRandomElements(arr, numElements) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random()); // копируем и перемешиваем массив
        return shuffled.slice(0, numElements); // возвращаем первые numElements элементов
    }

    // метод при загрузке выбирирает 4 случаных элемента из массива
    useEffect(() => {
        const randomElements = getRandomElements(samples, 4); // получаем 4 случайных элемента
        setItems(() => randomElements);
        console.log(items);
    }, [samples]);

    return (
        <>
            <div className='samples-container'>
                <dir className='samples-container-title'>
                    <h6>{title}</h6>
                </dir>
                <dir className='sample-container'>
                    {items.slice(0, 4).map((sample) => (
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
