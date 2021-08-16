import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitEdit, deleteReview } from "../../store/reviews";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solid} from '@fortawesome/free-solid-svg-icons'
import './ReviewComponent.css';


const ReviewComponent = ({ review, session }) => {
  const dispatch = useDispatch()
  const [showEdit, setShowEdit] = useState(false);
  const [editReview, setEditReview] = useState(review.review);
  const [editRating, setEditRating] = useState(review.rating);
  const [confirmDelete, setConfirmDelete] = useState(false);



  const handleDelete = () => {
    dispatch(deleteReview(review.id))
  };

  const editButton = () => {
    setShowEdit(!showEdit)
    setConfirmDelete(false)
  };

  const deleteButton = () => {
    setShowEdit(false)
    setConfirmDelete(!confirmDelete)
  }

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
          <div className='reviewcomponent__details'>
            <div className='userReview__personal'>
              <div className='profilePic'>{review.user?.profile_pic ? <img alt='profile' className='profile__pic' src={review.user?.profile_pic}/> : review.user?.first_name[0] + review.user?.last_name[0]}</div>
              <h2>{review.user?.first_name} {review.user?.last_name}</h2>
              <div className='reviewcomponent__stars'>{['','','','',''].map((star, i) => {
                if(i < review.rating) {
                  return star = <FontAwesomeIcon style={{'color': 'red'}} icon={solid} size='1x'/>
                } else {
                  return star = <FontAwesomeIcon style={{'color': 'red'}} icon={faStar} size='1x'/>
                }
              })}</div>
            </div>
            <div className='reviewcomponent__ratingreview'>
              <div>{review.review}</div>
            </div>
              {review.userId === session.user?.id && <button onClick={editButton}>Edit</button>}
              {review.userId === session.user?.id && <button onClick={deleteButton}>Delete</button>}
              {confirmDelete && <div>Are you sure? <button onClick={handleDelete}>Yes</button><button onClick={() => setConfirmDelete(false)}>No</button></div>}
              {showEdit && <form className='editForm' onSubmit={sendEdit}>
              <input type='number' min='0' max='5' value={editRating} onChange={e => setEditRating(e.target.value)}></input>
              <textarea resize='none' type='text'  value={editReview} onChange={e => setEditReview(e.target.value)}></textarea>
              <button type='submit'>Submit</button><button onClick={() => setShowEdit(false)}>Cancel</button>
              </form>}
          </div>
  )
}

export default ReviewComponent
