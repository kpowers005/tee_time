const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';

const reservationDispatch =  (reservations) => ({
  type: GET_RESERVATIONS,
  reservations
});


export const getReservations = (id) => async dispatch => {
  const res = await fetch(`/api/reservations/${id}`);

  if (res.ok){
    const {reservations} = await res.json()
    dispatch(reservationDispatch(reservations))
  }
};

export const submitReservation = (newReservation) => async dispatch => {
  const { course_api, time, date, userId } = newReservation

  const form = new FormData()
  form.append('course_api', `${course_api}`);
  form.append('date', date);
  form.append('time', time);
  form.append('userId', userId);


  const res = await fetch('/api/reservations/', {
    method: 'POST',
    body: form
  });

  if (res.ok){
    const {reservations} = await res.json()

    dispatch(reservationDispatch(reservations))
  }
};


export default function reservationReducer(state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case GET_RESERVATIONS:
      return { ...action.reservations }
    default:
      return newState;
  }
}
