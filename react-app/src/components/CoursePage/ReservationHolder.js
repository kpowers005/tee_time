import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitReservation } from "../../store/reservations";
import date from 'date-and-time';
import "./ReservationHolder.css";


const ReservationHolder = ({ id }) => {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state);
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState('6:00')
  const [dayAndNite, setDayAndNite] = useState('AM')
  const times = [];

  useEffect(() => {

    // dispatch((id))

  }, [dispatch, id]);


    let i = 6
    while(i < 20) {
      let h
      if (i > 12) {
        h = i - 12;
      }
      ['00', '15', '30', '45'].forEach(min => {
      const teetime = `${i < 13 ? i : h}:${min}`
      times.push(teetime);
      });
      i++
    }



  const handleSubmit = (e) => {
    e.preventDefault();

    const newDate = new Date(day)

    const newReservation = {
      'time': `${time} ${dayAndNite}`,
      'date': date.format(newDate, 'ddd, MMM DD YYYY'),
      'course_api': id,
      'userId': session.user.id
    };

    dispatch(submitReservation(newReservation))
    setDay('');
    setTime('');
  };

  return (
    <div className='teetime__formholder'>
      <h2>Make a Tee Time</h2>
      <form className='teetime__form' onSubmit={handleSubmit}>
        <input required type='date' value={day} onChange={e => setDay(e.target.value)}></input>
        <div style={{'display': 'flex'}}>
          <select required type='text' value={time} onChange={e => setTime(e.target.value)}>
            {times.map((h, i) => {
              return <option key={i + 1} value={`${h}`}>{h}</option>
            })}
          </select>
          <select required value={dayAndNite} onChange={e => setDayAndNite(e.target.value)}>
            {+time.split(':')[0] >= 6 && <option value='AM'>AM</option>}
            {+time.split(':')[0] < 8 && <option value='PM'>PM</option>}
          </select>
        </div>
        <button type='submit' disabled={session.user ? false : true}>Submit</button>
        {!session.user && <span style={{'color': 'red', 'fontStyle' : 'italic', 'marginLeft' : '8px'}}>Please login to make a tee time</span>}
      </form>
    </div>
  )
};


export default ReservationHolder;
