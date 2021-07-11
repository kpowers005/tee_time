import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const PlaceHolder = ({ place }) => {
  const photoref = place.photos[0].photo_reference;
  const {key} = useSelector(state => state.places)



  return key && (
    <div className='placeholder__main'>
      <Link to={`/course/${place.place_id}`}>
        <div>
          <img className='placeholder__photo' src={photoref ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${key}`
                                                            : 'https://teetimesbucket.s3.us-east-2.amazonaws.com/download.jpg'}/>
        </div>
        <div className='placeholder__details'>
          <h4>{place.name}</h4>
          <h4>{place.vicinity}</h4>
        </div>
      </Link>
    </div>
  )
}

export default PlaceHolder;
