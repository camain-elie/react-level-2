import { useState } from 'react';
import PropTypes from 'prop-types';

import './searchInput.css';

export default function SearchInput ({ getInputValue, searchIcon }) {
    
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
        getInputValue(e.target.value);
    };

    return(
        <div className="search-input">

            <p className={`search-input__icon ${value ? 'search-input__icon--text' : ''} material-icons-outlined`}>{searchIcon}</p>
            
            <input
                type="text"
                value={value}
                onChange={e => handleOnChange(e)}
                placeholder="Search a user"    
            />
        </div>
    );
}

SearchInput.propTypes = {
    getInputValue: PropTypes.func,
    searchIcon: PropTypes.string,
};