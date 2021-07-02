const GET_LOCATION = 'places/GET_LOCATION'
const GET_PLACES = 'places/GET_PLACES'

const location = result => ({
  type: GET_LOCATION,
  result
});

const places = places => ({
  type: GET_PLACES,
  places
});


export const getLocation = () => async dispatch => {
  const res = await fetch(`/api/places/get_location`, {
    method: 'POST',
  })

  if(res.ok){

    const geo = await res.json()
    console.log(geo)
    dispatch(location(geo))
  }
}

export const getPlaces = () => async dispatch => {
  const res = await fetch('/api/places/')

  console.log(res)
  if(res.ok){
    const placedata = await res.json()
    dispatch(places(placedata))
  }
}





export default function placesReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION:
      return { ...action.result }
    case GET_PLACES:
      return { ...action.places }
    default:
      return state;
  }
}
