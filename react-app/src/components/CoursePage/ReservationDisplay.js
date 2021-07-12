import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../store/reservations";


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
        <tbody>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Player(s)</th>
          </tr>
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
