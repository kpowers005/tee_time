import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchHolder = ({ place, api }) => {
  const photoref = (place.photos && place.photos[0].photo_reference);




  return api && (
    <div>
      <Link to={`/course/${place.place_id}`}>
        <div className='placeholder__photo'>
          {photoref && <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${api}`}/>}
        </div>
        <div className='placeholder__details'>
          <h3>{place.name}</h3>
          <h3>{place.vicinity}</h3>

        </div>
      </Link>
    </div>
  )
}

export default SearchHolder;
