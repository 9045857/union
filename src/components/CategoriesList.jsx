import {CategoryItem} from './CategoryItem'
import { ProductCard } from './product_cards_list/ProductCard';

export const CategoriesList = ({categories=[]})=>{
    return (
        <div className='list'>
            {categories.map(category=>(<ProductCard key={category.idCategory} {...category}/>))}

            {/* {categories.map(category=>(<CategoryItem key={category.idCategory} {...category}/>))} */}
        </div>
    );
} 