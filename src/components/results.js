import React from 'react';
import ResultsLi from './resultsLi.js';

const Results = (props) =>{
  function handleData(artist, song){
    props.getData(artist, song);
  }
  return(
    <div className="results">
      <h1>Displaying results for: <span className="display-3">{props.artist}</span></h1>
      <ResultsLi song={props.song} artist={props.artist} getData={handleData}/>
    </div>
  )
}
export default Results;
