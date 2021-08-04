import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../store/reservations";
import './ReservationDisplay.css'

const ReservationDisplay = ({ id }) => {
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations(id));
  }, [dispatch, id])

  const teetimes = Object.values(reservations);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Time</th>
            <th scope='col'>Player(s)</th>
          </tr>
        </thead>
        <tbody>
          {teetimes?.map(tt => {
            return <tr>
              <td>
                {tt.date}
              </td>
              <td>
                {tt.time}
              </td>
              <td>
                {tt.user.first_name} {tt.user.last_name}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
};


export default ReservationDisplay;
