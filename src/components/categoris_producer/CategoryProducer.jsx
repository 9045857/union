import { Link } from 'react-router-dom';

export const CatogoryProducer = (props) => {
    const {
        id = props.idMeal,
        image = props.strMealThumb,
        title = props.strMeal,
    } = props;

    return (
        <Link to={`/meal/${id}`}>
            <div className='card category-producer'>
                <div className='card-image image-category-producer'>
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className='card-content category-producer-content-title'>
                    <span className='category-producer-title card-title black-text'>
                        {title.substr(0,30)}
                    </span>
                </div>
            </div>
        </Link>
    );
};
