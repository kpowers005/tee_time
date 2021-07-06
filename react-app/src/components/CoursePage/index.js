import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPlaceDetails } from "../../store/places";
import CoursePhotos from "./CoursePhotos";


const CoursePage = () => {
  const { place_details } = useSelector(state => state.places)
  const dispatch = useDispatch();
  const { courseId } = useParams();
  console.log(courseId)
  console.log(place_details)

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
        {courseId}
      </div>
    </div>
  )
};

export default CoursePage;
