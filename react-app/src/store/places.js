const GET_PLACES = 'places/GET_PLACES'


const places = places => ({
  type: GET_PLACES,
  places
});


export const getLocation = () => async dispatch => {
  const res = await fetch(`/api/places/get_location/`)
  const {key} = await res.json()

  const wya = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`, { method : 'POST'})
  if(res.ok){

    const {location} = await wya.json()
    const data = await fetch(`/api/places/${location.lat}/${location.lng}`)
    const placedata = await data.json()
    dispatch(places(placedata))
  }
}







export default function placesReducer(state = {}, action) {
  switch (action.type) {
    case GET_PLACES:
      return { ...action.places }
    default:
      return state;
  }
}
