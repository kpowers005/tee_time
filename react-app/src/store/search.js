const SEARCH = 'search/SEARCH';
const SAVE_QUERY = 'search/SAVE_QUERY';

const results = (data, key) => ({
  type: SEARCH,
  data,
  key
});

const stashQuery = (query) => ({
  type: SAVE_QUERY,
  query
});


export const doSearch = (query) => async dispatch => {
  const res = await fetch(`/api/search/${query}/`)
  dispatch(stashQuery(query))
  if(res.ok){
    const {search, key} = await res.json()

    dispatch(results(search, key))
  }
};


export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH:
      const data = { ...action.data, 'key': action.key }
      return { ...data }
    case SAVE_QUERY:
      return { ...state, 'query': action.query }
    default:
      return state;
  }
}
