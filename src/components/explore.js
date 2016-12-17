import React from 'react';
var Slider = require('react-slick');
import Play from './play';

class Explore extends React.Component {
  constructor(props){
    super(props);
  }
  handleData(artist, song){
    this.props.datatoHome(artist, song);
  }
  render() {
    let results = [];
    for (var i = 0; i < 8; i++) {
        results.push(
        <div className="result">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/J-cole-the-warm-up.jpg" className="img"/>
          <p className="lead">
            {this.props.artist} <br />
            {this.props.song}
            <br />
            <Play artist={this.props.artist} song={this.props.song} getData={this.handleData}/>
          </p>
        </div>)
    }
    const data = results.map((result) => {
      return result;
    });
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }

      }]
    };
    return (
      <div className="col-sm-12 explore">
      <h3 className="display-4">Explore:</h3>
          <Slider {...settings}>
          {data}
          </Slider>
      </div>
    );
  }
};
export default Explore;
