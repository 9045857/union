import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const CatogoryProducer = (props) => {
    const {
        id = props.idMeal,
        image = props.strMealThumb,
        title = props.strMeal,
        left = props.left,
    } = props;

    useEffect(() => {
        console.log(left);
        return;
    }, [left]);

    return (
        <Link to={`/meal/${id}`}>
            <div
                className='card category-producer'
                // style={{ left: { left } }}
                style={{ left: left }}
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
