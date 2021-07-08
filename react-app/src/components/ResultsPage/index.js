import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchHolder from './SearchHolder';
import { doSearch } from "../../store/search";

const ResultsPage = () => {
  const search  = useSelector(state => state.search);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const { query } = useParams();



  useEffect(() => {
    dispatch(doSearch(query))
    setLoading(false)
  },[dispatch, query])

  return (
    <div className='splashpage__grid'>
      {loading && <div>Loading</div>}
      {search.results && search?.results.map(place => {
        return <SearchHolder key={place.place_id} place={place} api={search.key}/>
      })}
    </div>
  )
}

export default ResultsPage;
