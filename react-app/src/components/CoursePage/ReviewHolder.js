import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitReview } from "../../store/reviews";

const ReviewHolder = ( {id} ) => {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state)
  const [showReview, setShowReview] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  console.log(id)
  const handleClick = () => {
    setShowReview(!showReview)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      'review': review,
      'rating': +rating,
      'course_api': id,
      'userId': session.user.id
    };

    dispatch(submitReview(newReview))
    setShowReview(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Leave a Review</button>
      {showReview && <form onSubmit={handleSubmit}>
        <input onSubmit={handleSubmit} type='number' max='5' min='0' value={rating} onChange={e => setRating(e.target.value)}></input>
        <textarea required type='text' value={review} onChange={e => setReview(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
        </form>}
        <div>HOLA</div>
    </div>
  )
};


export default ReviewHolder;
