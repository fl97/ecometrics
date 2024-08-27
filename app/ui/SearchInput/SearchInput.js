import React, { useState } from 'react';
import './searchInput.css'

const SearchInput = ({ value, onChange }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <input
      type='text'
      className={`form-control ${isSearchFocused ? 'focused' : ''}`}
      placeholder='Suche nach Land oder Unternehmen...'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setIsSearchFocused(true)}
      onBlur={() => setIsSearchFocused(false)}
    />
  );
};

export default SearchInput;