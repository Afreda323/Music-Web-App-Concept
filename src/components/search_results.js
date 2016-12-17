import React, { Component } from 'react';
import logo from '../logo.svg';
import Results from './results.js';
import Player from './player.js';
import Search from './search.js';
import {Link} from 'react-router';

class Searched extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
  }
  handleSubmit(q){
    this.props.onSubmit(q);
  }
  handleData(artist, song){
    this.props.datatoHome(artist, song);
  }
  render() {
    let name = this.props.data;
    return (
      <div className={`route2 ${this.props.classname}`}>
          <nav>
              <div className="container">
                  <div className="row">
                    <div className="col-md-2 hidden-sm-down">
                      <a href="index.html"><i className="fa fa-music fa-3x" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-md-10">
                      <Search onSubmit={this.handleSubmit} />
                    </div>
                  </div>
              </div>
            </nav>
            <div className="container">
                  <Results song={"IDEK anymore yo"} artist={this.props.name} getData={this.handleData}/>
            </div>
        </div>
    );
  }
}

export default Searched;
