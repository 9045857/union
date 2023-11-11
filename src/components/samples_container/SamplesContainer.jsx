import { useState, useEffect } from 'react';
import { Sample } from './Sample';
import './samplesContainer.css';

export const SamplesContainer = ({ title = '', samples = [] }) => {
    //const [categories, setCategories] = useState([]);
    // const [samples, setSamples] =
    //     useState([]);

    useEffect(() => {
        console.log(samples);
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
