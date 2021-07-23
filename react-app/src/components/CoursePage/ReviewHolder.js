import React, { useEffect, useState }  from "react";
import ReviewComponent from './ReviewComponent';
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
    setRating(0);
    setReview('');
  };

  return (
    <div >
      {!session.user && <span style={{'color': 'red', 'fontStyle' : 'italic', 'marginLeft' : '8px'}}>Please login to leave review</span>}
      <button style={{'marginLeft': '8px'}}onClick={() => setShowReview(!showReview)} disabled={session.user ? false : true}>Leave a Review</button>
      {showReview && <form className='editForm' onSubmit={handleSubmit}>
        <input type='number' max='5' min='0' value={rating} onChange={e => setRating(e.target.value)}></input>
        <textarea required type='text' value={review} onChange={e => setReview(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
        <button onClick={() => setShowReview(false)}>Cancel</button>
        </form>}
        <div>
          {id && allReviews.map(review => {
            return <ReviewComponent key={review.id} review={review} session={session}/>
          })}
        </div>
    </div>
  )
};


export default ReviewHolder;
