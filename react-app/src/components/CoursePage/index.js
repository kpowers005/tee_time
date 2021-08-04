import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPlaceDetails } from "../../store/places";
import CoursePhotos from "./CoursePhotos";
import ReviewHolder from "./ReviewHolder";
import ReservationHolder from "./ReservationHolder";
import ReservationDisplay from "./ReservationDisplay";
import './index.css';


const CoursePage = () => {
  const { place_details } = useSelector(state => state.places)
  const dispatch = useDispatch();
  const { courseId } = useParams();



  useEffect(() => {
    dispatch(getPlaceDetails(courseId));
  }, [dispatch, courseId])

  console.log(place_details)

  return (
    <div >
      {place_details && <CoursePhotos photos={place_details?.photos}/>}
      <div>
        <div className='coursepage__generalinfo'>
          <h1>{place_details?.name}</h1>
          <h3 style={{'fontStyle' : 'italic'}}>{place_details?.vicinity}</h3>
          <h4>Official Website <a style={{'color': 'blue'}} href={`${place_details?.url}`}>Click Here</a></h4>
        </div>
        <div className='coursepage__reservations'>
          <h1>Upcoming Tee Times at this golf course</h1>
          {courseId && <ReservationDisplay id={courseId}/>}
        </div>
        <div className='coursepage__reviews'>
          <h1>Reviews</h1>
          {courseId && <ReviewHolder id={courseId}/>}
        </div>
        {courseId && <ReservationHolder id={courseId}/>}
      </div>
    </div>
  )
};

export default CoursePage;
