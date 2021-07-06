const GET_PLACES = 'places/GET_PLACES';
const PHOTOS = 'places/PHOTOS';


const places = locations => ({
  type: GET_PLACES,
  locations
});

const picturePerfect = photo => ({
  type: PHOTOS,
  photo
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
};


export const getPhoto = (photoref) => async dispatch => {
  const res = await fetch(`/api/places/photo/${photoref}`)

  if(res.ok){

    const photo = await res.json()
    dispatch(picturePerfect(photo))
  }
};



export default function placesReducer(state = {}, action) {
  switch (action.type) {
    case GET_PLACES:
      {
      const { places } = action.locations
      return { 'locations': places.results  }
      }
    case PHOTOS:
      return { ...action.photo }
    default:
      return state;
  }
}
