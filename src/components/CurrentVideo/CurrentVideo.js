import React from 'react';
import './CurrentVideo.css';
import Repl from '../Repl/Repl';
import YouTube from 'react-youtube';
const videos = require('../Scratch/scratchVideoObjects');
export default class CurrentVideo extends React.Component {

  buttonClickHandler() {
    console.log('buttonClicked');
    if (this.state.currentVideoIndex === 2) {
      return this.setState({
        currentVideoIndex: 0
      });
    }
    this.setState({
      currentVideoIndex: this.state.currentVideoIndex + 1
    });
  }

  render() {
    const opts = {
      height: '390',
      width: '640',     
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        'origin':'http://localhost:3000'
      }
    };

    return (
      <section className="classroom-section">
        <YouTube className="video-player"
        //=======================Connect this line with state==================================
          videoId={this.props.videos[this.props.path.index].id}
          opts={opts}
          host='http://localhost:3000'
          onReady={this._onReady}
          onEnd={()=>this.buttonClickHandler()} 
        />
        {/* <Repl /> */}
      </section>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

const mapStateToProps = state => ({
  display: state.auth.currentUser.displayPath
})