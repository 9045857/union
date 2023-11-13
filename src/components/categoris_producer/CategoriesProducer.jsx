import { Carousel } from './Carousel';
import './catogoriesProducer.css';

export const CategoriesProducer = ({ categories = [] }) => {
    return (
        <>
            <div className='categories-producer-container'>
                <dir className='categories-producer-container-title'>
                    <h6>Искать поставщиков по категориям</h6>
                </dir>

                <Carousel categories={categories} />
            </div>
        </>
    );
};
