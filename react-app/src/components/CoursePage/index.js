import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPlaceDetails } from "../../store/places";
import CoursePhotos from "./CoursePhotos";
import ReviewHolder from "./ReviewHolder";
import ReservationHolder from "./ReservationHolder";


const CoursePage = () => {
  const { place_details } = useSelector(state => state.places)
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const id = place_details.place_id

  useEffect(() => {
    dispatch(getPlaceDetails(courseId));
  }, [dispatch, courseId])


  return (
    <div>
      <CoursePhotos />
      <div>
        <div className='coursepage__generalinfo'>
          <h1>{place_details?.name}</h1>
          <h3>{place_details?.formatted_address}</h3>
          <h4>Official Website <a href={`${place_details?.url}`}>Click Here</a></h4>
        </div>
        <div className='coursepage__reservations'>
          <ReviewHolder id={id}/>
          <ReservationHolder />
        </div>
      </div>
    </div>
  )
};

export default CoursePage;
