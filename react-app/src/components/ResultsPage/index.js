import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SearchHolder from './SearchHolder';
import { doSearch } from "../../store/search";
import SearchBar from "../SearchBar";
import './index.css';

const ResultsPage = () => {
  const search  = useSelector(state => state.search);
  const dispatch = useDispatch();
  const { query } = useParams();

  const q = () => {
    let newQ = query.split('+');
    newQ.shift();
    let res = newQ.join(' ')
    return res
  }

  useEffect(() => {
    dispatch(doSearch(query))
  },[dispatch, query])

  return (
    <>
      <SearchBar />
      <h2 style={{'textAlign': 'center'}}>Showing search results for <span style={{'fontStyle': 'italic'}}>{q()}</span></h2>
      <div className='resultspage__grid'>
        {search?.results ? search?.results.map(place => {
          return <SearchHolder key={place.place_id} place={place} api={search.key}/>
        }) : <div>Loading...</div>}
      </div>
    </>
  )
}

export default ResultsPage;
