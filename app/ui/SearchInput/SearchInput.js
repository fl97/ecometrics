import React, { useState } from 'react';
import './searchInput.css'

const SearchInput = ({ value, onChange }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const validateInput = (input) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(input);
  };
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (validateInput(inputValue)) {
      onChange(inputValue);
    } else {
      return(
        console.log("Ungültige Eingabe")
      );
    }
  };

  return (
    <input
      type='text'
      className={`form-control ${isSearchFocused ? 'focused' : ''}`}
      placeholder='Suche nach Land oder Unternehmen...'
      value={value}
      onChange={handleInputChange}
      onFocus={() => setIsSearchFocused(true)}
      onBlur={() => setIsSearchFocused(false)}
    />
  );
};

export default SearchInput;