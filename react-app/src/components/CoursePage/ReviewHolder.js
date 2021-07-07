import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitReview, getReviews } from "../../store/reviews";

const ReviewHolder = ( {id} ) => {
  const dispatch = useDispatch();
  const { session, reviews } = useSelector(state => state)
  const [showReview, setShowReview] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const allReviews = Object.values(reviews)
  useEffect(() => {

    dispatch(getReviews(id))

  }, [dispatch, id]);



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
        <div>
          {id && allReviews.map(review => {
            return <div key={review.id}>{review.rating}{review.review}</div>
          })}
        </div>
    </div>
  )
};


export default ReviewHolder;
