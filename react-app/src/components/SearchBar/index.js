import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    const split = query.split(' ');
    const q = split.join('+');
    const gq = 'golf+' + q
    history.push(`/search_results/${gq}/`)
  };

  return (
  <div className='searchbar__holder'>
    <input className='searchbar__input' type='text' onChange={e => setQuery(e.target.value)} value={query}></input>
    <button onClick={handleSearch}>Search</button>
    <span>Search Powered by Google</span>
  </div>
  )
};

export default SearchBar;
