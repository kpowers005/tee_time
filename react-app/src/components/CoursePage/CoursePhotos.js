import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const CoursePhotos = ({ photos }) => {
  const {key} = useSelector(state => state.places);

  useEffect(() => {

  });

  return key && (
    <div>
      {photos &&
       <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photos[0].photo_reference}&key=${key}`}/>
      }
    </div>
  )
}

export default CoursePhotos;
