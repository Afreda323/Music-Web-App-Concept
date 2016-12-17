import React from 'react';
import Play from './play';

const ResultsLi = (props) =>{
  let results = [];
  function handleData(artist, song){
    props.getData(artist, song);
  }
  for (var i = 0; i < 12; i++) {
      results.push(
        <div className="col-lg-3 col-md-4 col-xs-6  text-center result">
            <img src="http://placehold.it/150x150" className="img"/>
            <p className="lead">
              {props.song} <br />
              {props.artist}
              <br />
              <Play artist={props.artist} song={props.song} getData={handleData}/>
            </p>
        </div>)
  }
  const data = results.map((result) => {
    return result;
  });
  return(
    <div>
        <div className="row">
          {data}
        </div>
    </div>
  )
}
export default ResultsLi;
