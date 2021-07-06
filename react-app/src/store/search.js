const SEARCH = 'search/SEARCH';


const results = (data) => ({
  type: SEARCH,
  data
});


export const doSearch = (query) => async dispatch => {
  const res = await fetch(`/api/search/${query}/`)

  if(res.ok){

    const {search} = await res.json()
    dispatch(results(search))
  }
};


export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return { ...action.data }
    default:
      return state;
  }
}
