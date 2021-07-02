import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, getPlaces } from '../../store/places';



const Splash = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const location = useSelector(state => state.places)

  console.log(location)
  useEffect(() => {
    dispatch(getLocation())
    dispatch(getPlaces())

  }, [dispatch])

  console.log(location)

  // const handleClick = () => {
  //   const split = search.split(' ');
  //   const query = split.join('+');
  //   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${process.env.REACT_APP_API_KEY}`
  //   dispatch(sea)
  // }

  return (
    <div>
      <div>
        <input type='text' onChange={setSearch} value={search}></input><button >Search</button>
      </div>
      <div>
      </div>
    </div>
  )
}

// https://maps.googleapis.com/maps/api/place/textsearch/json?query={string for search}&key={apiKey}&location={latitude,longitude}&radius=50000
export default Splash;
