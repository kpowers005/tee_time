const GET_PLACES = 'places/GET_PLACES';
const DETAILS = 'places/DETAILS';
const STORE_KEY = 'places/STORE_KEY';
const STASH_LOCATION = 'places/STASH_LOCATION';

const places = locations => ({
  type: GET_PLACES,
  locations
});

const placeDetails = details => ({
  type: DETAILS,
  details
});

const storeKey = key => ({
  type: STORE_KEY,
  key
});

const stashLocation = coordinates => ({
  type: STASH_LOCATION,
  coordinates
});


export const getLocation = (demo = false) => async dispatch => {
  const res = await fetch(`/api/places/get_location/`)
  const {key} = await res.json()

  dispatch(storeKey(key));

  let coordinates = {}
  if (demo) {
    coordinates.lat = 42.4651;
    coordinates.lng = -71.010051;
  } else {
    coordinates = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`, { method : 'POST'});
    const {location} = await coordinates.json()
    coordinates = { ...location }
  };

  if(res.ok){


    dispatch(stashLocation(coordinates))
    const data = await fetch(`/api/places/${coordinates.lat}/${coordinates.lng}`)
    const placedata = await data.json()
    dispatch(places(placedata))
  }
};




export const getPlaceDetails = (courseId) => async dispatch => {
  const res = await fetch(`/api/places/details/${courseId}`)

  if(res.ok){

    const details = await res.json()
    console.log(details)
    dispatch(storeKey(details.key))
    dispatch(placeDetails(details))
  }
};



export default function placesReducer(state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case GET_PLACES:
      const { places } = action.locations
      const placesArray = places.results
      return { ...newState, 'locations' : placesArray }
    case DETAILS:
      const {place_details} = action.details
      return  { ...newState, 'place_details' : place_details.result}
    case STORE_KEY:
      return { ...newState, 'key': action.key }
    case STASH_LOCATION:
      return { ...newState, 'coordinates': action.coordinates }
    default:
      return state;
  }
}
