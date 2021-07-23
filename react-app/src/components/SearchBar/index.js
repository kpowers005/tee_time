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
    <div>
      <form onSubmit={handleSearch} ><input className='searchbar__input' type='text' onSubmit={handleSearch} onChange={e => setQuery(e.target.value)} value={query}></input></form>
    </div>
    <div>
      <button onClick={handleSearch}>Search</button>
      <span style={{'marginLeft': '10px'}}>Search Powered by Google</span>
    </div>
  </div>
  )
};

export default SearchBar;
