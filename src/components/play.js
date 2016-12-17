import React, { Component } from 'react';
import logo from '../logo.svg';
import makeCall from './callTo.js';
import Results from './results.js';
import Explore from './explore.js';
import Player from './player.js';
import Search from './search.js'


const Play = (props) =>{
  function handleClick(){
      document.querySelector('.player').className = "player show";
      props.getData(props.artist, props.song)
  }
    return (
      <a onClick={handleClick}><i className="fa fa-play-circle-o fa-3x" aria-hidden="true"></i></a>
    );
}

export default Play;
