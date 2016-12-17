import React, { Component } from 'react';
import {Link} from 'react-router';

class Search extends Component {
 constructor(props){
   super(props);
   this.state={
     term: ''
   }
   this.onInputChange = this.onInputChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 onInputChange(e){
   this.setState({term: e.target.value})
 }
 handleSubmit(e){
   e.preventDefault();
   this.props.onSubmit(this.state.term);
   this.setState({term: ''})
 }
  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
            type="text"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.term}
            placeholder="search..."/>
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-danger">Search</button>
        </span>
      </form>
    );
  }
}

export default Search;
