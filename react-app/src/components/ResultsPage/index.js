import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchHolder from './SearchHolder';
import { doSearch } from "../../store/search";

const ResultsPage = () => {
  const search  = useSelector(state => state.search);
  const dispatch = useDispatch();
  const { query } = useParams();



  useEffect(() => {
    dispatch(doSearch(query))
  },[dispatch, query])

  return (
    <div className='splashpage__grid'>
      {search.results ? search?.results.map(place => {
        return <SearchHolder key={place.place_id} place={place} api={search.key}/>
      }) : <div>Loading</div>}
    </div>
  )
}

export default ResultsPage;
