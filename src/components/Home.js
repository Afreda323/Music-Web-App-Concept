import React from 'react';
import Footer from './layout/footer.js';
import Log from './layout/login.js';
import Content from './layout/content.js';
import Search from './search.js';
import Sound from 'react-sound';
import Modal from './layout/modal.js';
import Player from './layout/player.js';
var SC = require('soundcloud');
//initialize SC SDK
SC.initialize({
    client_id: 'ZGZTWqV8BgX3IXqDke1KC7Qi9cggjMne',
});

class Home extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                    tracks: [],
                    q: '',
                    streaming: false,
                    loading: false,
                    playingId: '',
                    artist: '',
                    song: '',
                    art: '',
                    url: '',
                    currentSong: {url: ''},
                    playStatus: Sound.status.STOPPED
                }
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handleClick = this.handleClick.bind(this);
                this.setUpStream = this.setUpStream.bind(this);
                this.loadStream = this.loadStream.bind(this);
            }
        //Set up stream url for SoundCloud
        setUpStream(id, artist, song, art, request) {
            let url = `/tracks/${id}`;
            console.log(url);
            console.log('stream loading');
            this.setState({
                playingId: id,
                artist: artist,
                song: song,
                art: art
            });
            this.loadStream(url, request);
        }
        //Load stream from SoundCloud
        loadStream(url, request) {
          var self= this;
          if (request === 'stop') {
            this.setState({playStatus: Sound.status.STOPPED});
          }else{
            SC.get(url)
              .then(function(track) {
                console.log(track);
                document.querySelector('.playing').className= "playing active";
                let stream = `${track.stream_url}?client_id=ZGZTWqV8BgX3IXqDke1KC7Qi9cggjMne`;
                self.setState({
                    currentSong: { url: stream },
                    playStatus: Sound.status.PLAYING,
                    url: track.permalink_url
                  });
                  console.log(self.state.playStatus, "hello");
            });
          }
        }
        //make call to SoundCloud for search results
        makeCall() {
            var self = this;
            self.setState({
                loading: true
            });
            SC.get('/tracks', {
                q: this.state.q,
                limit: 100
            }).then(function(tracks) {
                if (tracks.length < 1) {
                    alert('no tracks');
                    self.setState({
                        loading: false
                    });
                } else {
                    self.setState({
                        tracks: tracks
                    });
                    console.log(self.state.tracks);
                    document.getElementById('modal').className = "";
                }
            });
        }
        //handle the submission of searchbar form
        handleSubmit(term) {
            this.setState({
                q: term
            }, this.makeCall);
            console.log(this.state.q);
        }
        //handle the closing of the modal
        handleClick() {
            document.getElementById('modal').scrollTop = 0;
            document.getElementById('modal').className = "hide";
            //if loader is still rendered, kill it
            this.setState({
                loading: false
            });
        }
  render(){
    return(
      <div>
      <Modal
          onClick={this.handleClick}
          tracks={this.state.tracks}
          id={this.state.playingId}
          q={this.state.q}
          onChoice={this.setUpStream}
          onPause={this.handlePause}/>
      <Search
          onSubmit={(term) => this.handleSubmit(term)}
          loading={this.state.loading}/>
      <Log />
      <Content />
      <Sound
          url={this.state.currentSong.url}
          playStatus={this.state.playStatus}
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})} />
      <Player
          song={this.state.song}
          artist={this.state.artist}
          art={this.state.art}
          url = {this.state.url}
          onPlay= {() => this.setState({playStatus: Sound.status.PLAYING})}
          onPause = {() => this.setState({playStatus: Sound.status.PAUSED})}
          onStop = {() => this.setState({playStatus: Sound.status.STOPPED, playingId: ''})}/>
      <Footer />
      </div>
    )
  }
}
export default Home;
