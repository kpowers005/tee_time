import React from "react";
import { useSelector } from "react-redux";
import './CoursePhotos.css';


const CoursePhotos = ({ photos }) => {
  const {key} = useSelector(state => state.places);



  return key && (
    <div className='coursephotos__main'>
      {photos[0].photo_reference ?
       <img alt='golf course' className='coursephotos__photo' src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photos[0].photo_reference}&key=${key}`}/>
      : <div>Img Not Found</div>}
      {photos[4].photo_reference ?
       <img alt='golf course' className='coursephotos__photo' src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photos[4].photo_reference}&key=${key}`}/>
      : <div>Img Not Found</div>}
      {photos[3].photo_reference ?
       <img alt='golf course' className='coursephotos__photo' src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photos[3].photo_reference}&key=${key}`}/>
      : <div>Img Not Found</div>}
      {photos[6].photo_reference ?
       <img alt='golf course' className='coursephotos__photo' src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photos[6].photo_reference}&key=${key}`}/>
      : <div>Img Not Found</div>}
    </div>
  )
}

export default CoursePhotos;
