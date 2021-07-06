import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSearch } from "../../store/search";
import PlaceHolder from "./PlaceHolder";
import './index.css';


const Splash = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [query, setQuery] = useState('');
  const {locations} = useSelector(state => state.places)

  console.log(locations)

  const handleSearch = () => {
    const split = query.split(' ');
    const q = split.join('+');

    dispatch(doSearch(q))
    history.push('/search_results/')
  }

  return (
    <div>
      <div className='splashpage__searchbar--holder'>
        <input className='splashpage__searchbar' type='text' onChange={e => setQuery(e.target.value)} value={query}></input><button onClick={handleSearch}>Search</button>
      </div>
      <div className='splashpage__grid'>
        {locations?.map(place => {
          return <PlaceHolder key={place.place_id} place={place}/>
        })}
      </div>
    </div>
  )
}

// https://maps.googleapis.com/maps/api/place/textsearch/json?query={string for search}&key={apiKey}&location={latitude,longitude}&radius=50000
export default Splash;