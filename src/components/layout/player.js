import React from 'react';

const Player = (props) =>{
  let tweet = `https://twitter.com/intent/tweet?text=Now%20Playing...&url=${props.url}`;
  return(
    <div className="container-fluid playing">
      <div className="row">
        <div className="col-xs-3">
        <div className="cover-w">
          <img src={props.art} className="cover" />
        </div>
        </div>
        <div className="col-xs-9">
          <a onClick = {props.onPlay}><i className='fa fa-3x fa-play-circle-o' aria-hidden="true"></i></a>
          <a onClick = {props.onPause}><i className='fa fa-3x fa-pause-circle-o' aria-hidden="true"></i></a>
          <a onClick = {props.onStop}><i className='fa fa-3x fa-stop-circle-o' aria-hidden="true"></i></a>
          <a target="_blank" href = {tweet}><i className='fa fa-3x fa-twitter' aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="row purp">
        <div className="col-xs-12">
          <div className="detail-w text-center">
            <h4>{props.song} | {props.artist}</h4>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Player;
