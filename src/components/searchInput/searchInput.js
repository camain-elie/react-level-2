import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './searchInput.css';

export default function SearchInput ({ getInputValue, searchIcon }) {
    
    const [value, setValue] = useState('');

    useEffect(() => {
        const delay = setTimeout(() => {
            getInputValue(value);
        }, 10);
    
        return () => clearTimeout(delay);
    }, [value]);


    return(
        <div className="search-input">

            <p className={`search-input__icon ${value ? 'search-input__icon--text' : ''} material-icons-outlined`}>{searchIcon}</p>
            
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search a user"    
            />
        </div>
    );
}

SearchInput.propTypes = {
    getInputValue: PropTypes.func,
    searchIcon: PropTypes.string,
};