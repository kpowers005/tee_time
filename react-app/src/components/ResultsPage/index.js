import React from "react";
import { useSelector } from "react-redux"

const ResultsPage = () => {
  const search  = useSelector(state => state.search)

  console.log(search)
  return (
    <div>
      Hello
    </div>
  )
}

export default ResultsPage;
