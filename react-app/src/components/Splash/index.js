import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSearch } from "../../store/search";
import { getLocation } from "../../store/places";
import PlaceHolder from "./PlaceHolder";
import SearchBar from '../SearchBar';
import './index.css';



const Splash = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {locations, coordinates} = useSelector(state => state.places)


  useEffect(() => {
    if (!coordinates) {
      dispatch(getLocation())
    }
  }, [dispatch])



  return (
    <div className='splashpage__main'>
      <SearchBar />
      <h1>Welcome to TeeTime!</h1>
      <h3>Find golf courses in your area</h3>
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
