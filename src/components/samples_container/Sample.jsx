import { Link } from 'react-router-dom';

export const Sample = (props) => {
    const {
        id = props.idMeal,
        image = props.strMealThumb,
        title = props.strMeal,
        price = props.price,
    } = props;

    return (
        <Link to={`/meal/${id}`}>
            <div className='card sample-card'>
                <div className='card-image sample-image'>
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className='card-content sample-price-area'>
                    <span className='sample-price-text card-title black-text'>
                        {price}
                    </span>
                </div>
            </div>
        </Link>
    );
};
