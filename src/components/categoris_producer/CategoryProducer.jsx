import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const CategoryProducer = (props) => {
    const { idMeal: id, strMealThumb: image, strMeal: title, left } = props;

    return (
        <Link
            to={`/meal/${id}`}
            className='card-producer-link'
        >
            <div
                className='card category-producer'
                style={{ left: `${left}px ` }}
            >
                <div className='card-image image-category-producer'>
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className='card-content category-producer-content-title'>
                    <span className='category-producer-title card-title black-text'>
                        {title.substr(0, 30)}
                    </span>
                </div>
            </div>
        </Link>
    );
};
