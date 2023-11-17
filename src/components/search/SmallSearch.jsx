import { useState } from 'react';
import './smallSearch.css';

export const SmallSearch = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='sm-search-area'>
            <div className='sm-search-select-input'>
                <select className='sm-select-search-type'>
                    <option value='poduct'>Товар</option>
                    <option value='plant'>Производитель</option>
                </select>
                <input
                    className='sm-input-field'
                    type='search'
                    id='sm-search-field'
                    placeholder='эмульсионный ПВХ EL-103'
                    onKeyDown={handleKey}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />

                <button
                    className='sm-search-bnt btn #ec407a pink lighten-1'
                    style={{ position: 'absolute', top: 4, right: 6 }}
                    onClick={handleSubmit}
                >
                    <i className='material-icons left'>search</i>
                    <span>Поиск</span>
                </button>
            </div>
        </div>
    );
};
