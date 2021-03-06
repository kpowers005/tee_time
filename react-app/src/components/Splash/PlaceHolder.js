import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const PlaceHolder = ({ place }) => {
  const photoref = place.photos ? place.photos[0].photo_reference : false
  const {key} = useSelector(state => state.places)

  console.log(place)

  return key && (
    <div >
      <Link className='placeholder__main'to={`/course/${place.place_id}`}>
        <div className='placeholder__photoholder'>
          <img alt='golf course' className='placeholder__photo' src={photoref ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${key}`
                                                             : 'https://teetimesbucket.s3.us-east-2.amazonaws.com/download.jpg'}/>
        </div>
        <div className='placeholder__details'>
          <h4>{place.name}</h4>
          <div className='place__location'>{place.vicinity}</div>
        </div>
      </Link>
    </div>
  )
}

export default PlaceHolder;
