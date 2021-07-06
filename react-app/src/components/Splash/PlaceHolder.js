import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../store/places";

const PlaceHolder = ({ place }) => {
  const dispatch = useDispatch();
  const photoref = place.photos[0].photo_reference;
  const photo = useSelector(state => state.places)
  console.log(place)



  // useEffect(() => {
  //   dispatch(getPhoto(photoref))
  // });


  return (
    <div>
      <div className='placeholder__photo'>
        <img />
      </div>
      <div className='placeholder__details'>
        <h3>{place.name}</h3>
        <h3>{place.vicinity}</h3>

      </div>
    </div>
  )
}

export default PlaceHolder;
