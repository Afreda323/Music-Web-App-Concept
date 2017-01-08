import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        term: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
    this.setState({
        term: e.target.value
    });
}
handleSubmit(e) {
    e.preventDefault();
    if (this.state.term !== "") {
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
        this.setState({
            term: ''
        });
    }
}
  render(){
    let load;
    if (this.props.loading === true) {
      load = "fa fa-lg fa-spinner";
    }else{
      load = 'fa fa-lg fa-search';
    }
    return(
      <header className="song-playing">
        <div className="video-bg">
        <div id="player">
        </div>
        </div>
        <div className="over">
          <div className="container">
            <h1>
                  <i className="fa fa-music fa-lg" aria-hidden="true"></i>
                  <br /><br />
                  Music, the universal language
            </h1>
            <p>Listen to, Discover, and share new songs.</p>
            <br />
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div className="form-control">
                <input type="text" placeholder="Search for Music..." value={this.state.term} onChange={this.handleChange.bind(this)}/>
                <button className="btn" type="submit"><i className={load} aria-hidden="true"></i></button>
              </div>
            </form>
          </div>
        </div>
      </header>

    )
  }
}
export default Search;
