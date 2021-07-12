import React from "react";
import { Link } from "react-router-dom";

const SearchHolder = ({ place, api }) => {
  const photoref = (place.photos && place.photos[0].photo_reference);



  return api && (
    <div className='searchholder__main'>
      <Link to={`/course/${place.place_id}`}>
        <div >
          <img alt='golf course' className='searchholder__photo' src={photoref ?
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${api}`
          : 'https://teetimesbucket.s3.us-east-2.amazonaws.com/download.jpg'}/>
        </div>
        <div className='searchholder__details'>
          <h3>{place.name}</h3>
          <h3>{place.formatted_address}</h3>
        </div>
      </Link>
    </div>
  )
}

export default SearchHolder;
