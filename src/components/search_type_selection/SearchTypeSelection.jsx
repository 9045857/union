import { useState } from 'react';
import './searchTypeSelection.css';

export const SearchTypeSelection = ({ cb = Function.prototype }) => {
    const [tipeSelection, setTypeSelection] = useState('goods'); //goods или manufacturers

    return (
        <>
            <div className='search-type'>
                <span
                    className={
                        tipeSelection === 'goods'
                            ? 'selected-search-type'
                            : null
                    }
                    onClick={() => setTypeSelection('goods')}
                >
                    Товары
                </span>
                <span
                    className={
                        tipeSelection === 'manufacturers'
                            ? 'selected-search-type'
                            : null
                    }
                    onClick={() => setTypeSelection('manufacturers')}
                >
                    Производители
                </span>
            </div>
        </>
    );
};
