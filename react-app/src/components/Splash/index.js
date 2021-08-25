import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../store/places";
import PlaceHolder from "./PlaceHolder";
import SearchBar from '../SearchBar';
import './index.css';



const Splash = () => {
  const dispatch = useDispatch();
  const {locations, coordinates} = useSelector(state => state.places)


  useEffect(() => {
    if (!coordinates) {
      dispatch(getLocation())
    }
  }, [dispatch])



  return (
    <div className='splashpage__main'>
      <SearchBar />
      <h2 style={{'marginTop' : '5px'}}>Golf courses near you</h2>
      <div className='splashpage__grid'>
        {locations && locations.map(place => {
          return <PlaceHolder key={place.place_id} place={place}/>
        })}
      </div>
    </div>
  )
}

export default Splash;
