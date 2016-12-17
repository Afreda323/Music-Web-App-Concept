import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './layout/header';
import Footer from './layout/footer';
import Searched from './search_results';
import Explore from './explore.js';
import Player from './player.js';
import Search from './search.js'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      song: "Dead Presidents II",
      artist: 'J. Cole',
      q: '',
      searched: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSong = this.setSong.bind(this);
  }
  handleSubmit(q){
    if (q !== "") {
      this.setState({q: q, searched: true})
    }
  }
  setSong(artist, song){
    this.setState({
      song: song,
      artist: artist
    })
  }
  render() {
    let name = "artist name";
    let classname, thisclass;
    if(this.state.searched === true){
       classname = 'showIt';
       thisclass = 'hide';
    }else{
       classname = 'hide';
       thisclass = 'showIt';
    }
    return (
      <div className="App">
       <div className={`home ${thisclass}`}>
          <Header />
          <main>
            <div className="container">
              <div className="row">
                <Search onSubmit={this.handleSubmit} link="searched" q={this.state.q}/>
              </div>
              <div className="row">
                <Explore song={this.state.song} artist={this.state.artist} datatoHome={this.setSong}/>
              </div>
            </div>
          </main>
        </div>
        <Player song={this.state.song} artist={this.state.artist} />
          <Searched classname={classname} name={this.state.q} onSubmit={this.handleSubmit} datatoHome={this.setSong}/>
          <Footer />
    </div>
    );
  }
}

export default Home;
