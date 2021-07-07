import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPhoto } from "../../store/places";


const PlaceHolder = ({ place }) => {
  const photoref = place.photos[0].photo_reference;
  const {key} = useSelector(state => state.places)



  return key && (
    <div>
      <Link to={`/course/${place.place_id}`}>
        <div className='placeholder__photo'>
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${key}`}/>
        </div>
        <div className='placeholder__details'>
          <h3>{place.name}</h3>
          <h3>{place.vicinity}</h3>

        </div>
      </Link>
    </div>
  )
}

export default PlaceHolder;
