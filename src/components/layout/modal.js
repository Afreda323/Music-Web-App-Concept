import React from 'react';


const Modal = (props) => {
        //shrink strings on mobile
        function check(string) {
            if (window.innerWidth <= 400) {
                if (string.length > 35) {
                    return string.substring(0, 34) + "...";
                } else {
                    return string;
                }
            } else if (window.innerWidth <= 800) {

                if (string.length > 45) {
                    return string.substring(0, 44) + "...";
                } else {
                    return string;
                }
            } else {
                return string;
            }
        }
  var tracks = props.tracks.map((track) => {
            //handle whether or not theres artwork
            let art;
            if (track.artwork_url) {
                art = track.artwork_url;
            } else {
                art = "noArt.png";
            }
            //handle whether or not song is playing
            let play;
            let request;
            if (props.id === track.id) {
                play = "fa fa-3x fa-stop-circle-o";
                request = "stop";
            } else {
                play = "fa fa-3x fa-play-circle-o";
                request = "play";
            }
            let tweet = `https://twitter.com/intent/tweet?text=Now%20Playing...&url=${track.permalink_url}`;
    //render individual results
    return(
      <div className="row" key={track.id}>
        <div className="col-sm-12">
          <div className="result">
            <div className="row">
              <div className="col-xs-2">
                <img src={art} className="cover" alt="album cover"/>
              </div>
              <div className="col-xs-8 info">
                <h4>{check(track.title)}</h4>
                <p>{check(track.user.username)}</p>
              </div>
              <div className="col-xs-2 text-center play">
                <a className="play toggle"
                    onClick={(e) => {props.onChoice(track.id, check(track.user.username), check(track.title), art, request)}}>
                    <i className={play} aria-hidden="true"></i>
                </a>
                <a className="tweet" href={tweet}><i className='fa fa-3x fa-twitter' aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  });
//modal window
  return(
    <section id="modal" className="hide">
      <a className="close" onClick={props.onClick}><i className="fa fa-2x fa-times" aria-hidden="true"></i></a>
      <div className="modal-top" id="top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1><small>Showing results for:</small> <br/> {props.q}</h1>
            </div>
          </div>
        </div>
      </div>
    <div className="results container">
            {tracks}
      </div>
    </section>
  )
}
export default Modal;
