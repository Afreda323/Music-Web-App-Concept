import React from 'react';

const Player = (props) =>{

  function handleClick(e){
    if (document.querySelector('.playButton').classList.contains('fa-pause')) {
      document.querySelector('.playButton').className = 'fa fa-play fa-2x playButton';
    }else if(document.querySelector('.playButton').classList.contains('fa-play')){
      document.querySelector('.playButton').className = 'fa fa-pause fa-2x playButton';
    }
  }
  return(
    <div className="player">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 flex">
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/J-cole-the-warm-up.jpg"className="player-img" />
            <a><i className="fa fa-fast-backward fa-2x" aria-hidden="true"></i></a>
            <a onClick={handleClick}><i className="fa fa-pause fa-2x playButton" aria-hidden="true"></i></a>
            <a><i className="fa fa-fast-forward fa-2x" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="row">
            <div className="col-xs-12 text-center">
              <p className="lead">
                {props.song} - {props.artist}
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Player;
