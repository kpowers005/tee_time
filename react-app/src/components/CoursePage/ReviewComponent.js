import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitEdit, deleteReview } from "../../store/reviews";



const ReviewComponent = ({ review, session }) => {
  const dispatch = useDispatch()
  const [showEdit, setShowEdit] = useState(false);
  const [editReview, setEditReview] = useState(review.review);
  const [editRating, setEditRating] = useState(review.rating);
  const [confirmDelete, setConfirmDelete] = useState(false);



  const handleDelete = () => {
    dispatch(deleteReview(review.id))
  };

  const sendEdit = (e) => {
    e.preventDefault();
    const newReview = {
      'id': review.id,
      'review': editReview,
      'rating': editRating,
    };
    dispatch(submitEdit(newReview))
    setShowEdit(false)
  }
  return (
          <div>
              {review.user?.first_name} {review.user?.last_name}{review.rating}{review.review}
              <button disabled={review.userId !== session.user?.id} onClick={() => setShowEdit(!showEdit)}>Edit</button>
              <button disabled={review.userId !== session.user?.id} onClick={() => setConfirmDelete(!confirmDelete)}>Delete</button>
              {confirmDelete && <div>Are you sure? <button onClick={handleDelete}>Yes</button><button onClick={() => setConfirmDelete(false)}>No</button></div>}
              {showEdit && <form onSubmit={sendEdit}>
              <input type='number' min='0' max='5' value={editRating} onChange={e => setEditRating(e.target.value)}></input>
              <textarea type='text'  value={editReview} onChange={e => setEditReview(e.target.value)}></textarea>
              <button type='submit'>Submit</button>
              </form>}
          </div>
  )
}

export default ReviewComponent
