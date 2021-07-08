import React from "react";
import { useSelector } from "react-redux"
import SearchHolder from './SearchHolder';

const ResultsPage = () => {
  const search  = useSelector(state => state.search)

  console.log(search)
  return (
    <div className='splashpage__grid'>
      {search.results?.map(place => {
        return <SearchHolder key={place.place_id} place={place}/>
      })}
    </div>
  )
}

export default ResultsPage;
