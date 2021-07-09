import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const ReservationHolder = ({ id }) => {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state);
  const [showReservation, setShowReservation] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {

    // dispatch((id))

  }, [dispatch, id]);

  console.log(date)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      'date': +date,
      'course_api': id,
      'userId': session.user.id
    };

    setDate(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='date' value={date} onChange={e => setDate(e.target.value)}></input>
        <input type='time' value={time} step='900000' onChange={e => setTime(e.target.value)}></input>
        <button type='submit' disabled={session.user ? false : true}>Submit</button>
        </form>
        <div>
          {/* {id && allReviews.map(review => {
            return <ReviewComponent key={review.id} review={review} session={session}/>
          })} */}
        </div>
    </div>
  )
};


export default ReservationHolder;
