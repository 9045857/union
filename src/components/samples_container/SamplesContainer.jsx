import { useState, useEffect } from 'react';
import { Sample } from './Sample';
import './samplesContainer.css';

export const SamplesContainer = ({ title = '', samples = [] }) => {
    const [items, setItems] = useState([]);

    const getRandomElements = (arr, numElements) => {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    const addRandomPrice = (array) => {
        const userLocale = navigator.language;
        const formatter = new Intl.NumberFormat(userLocale);
        const newArray = array.map((item) => ({
            ...item,
            price: `${formatter.format(
                (
                    Math.floor(Math.random() * (10000 - 30 + 1)) / 100 +
                    30
                ).toFixed(2)
            )} руб.`,
        }));

        return newArray;
    };

    useEffect(() => {
        const fetchRandomElements = async () => {
            let randomElements = getRandomElements(samples, 4);
            randomElements = addRandomPrice(randomElements);
            setItems(randomElements);
            // console.log(items);
        };

        fetchRandomElements();
        // eslint-disable-next-line
    }, [samples]);

    return (
        <div className='samples-container'>
            <div className='samples-container-title'>
                <h6>{title}</h6>
            </div>
            <div className='sample-container'>
                {items.map((sample) => (
                    <Sample
                        key={sample.idMeal}
                        {...sample}
                    />
                ))}
            </div>
        </div>
    );
};
