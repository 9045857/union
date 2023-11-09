import './searchTypeSelection.css';

export const SearchTypeSelection = ({ cb = Function.prototype }) => {
    return (
        <>
            <div className='search-type'>
                <span className='selected-search-type'>Товары</span>
                <span>Производители</span>
            </div>
        </>
    );
};
