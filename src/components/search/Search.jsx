import { useState } from 'react';
import './search.css';

export const Search = ({ cb = Function.prototype }) => {
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
        <div className='row'>
            <div className='search-area input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='диоксид титана Blr-698'
                    onKeyDown={handleKey}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />

                <button
                    className='search-bnt btn #ec407a pink lighten-1'
                    style={{ position: 'absolute', top: 10, right: 12 }}
                    onClick={handleSubmit}
                >
                    <i className='material-icons left'>search</i>
                    <span>Поиск</span>
                </button>
            </div>
        </div>
    );
};
