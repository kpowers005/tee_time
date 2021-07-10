import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import date from 'date-and-time';
import "./ReservationHolder.css";


const ReservationHolder = ({ id }) => {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state);
  const [showReservation, setShowReservation] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {

    // dispatch((id))

  }, [dispatch, id]);



  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      'time': time,
      'date': date,
      'course_api': id,
      'userId': session.user.id
    };

    setDate(null);
  };

  console.log(time)
  console.log(date)
  return (
    <div className='teetime__formholder'>
      <h3>Make a Tee Time!</h3>
      <form className='teetime__form' onSubmit={handleSubmit}>
        <input type='date' value={date} onChange={e => setDate(e.target.value)}></input>
        <input type='time' value={time} min='07:00' step='900' onChange={e => setTime(e.target.value)}></input>
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
