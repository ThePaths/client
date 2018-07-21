import React from 'react';
import { connect } from 'react-redux';
import './CurrentVideo.css';
import Repl from '../Repl/Repl';
import YouTube from 'react-youtube';
import { Redirect } from 'react-router-dom';
import { getLesson } from '../../actions/paths';
const videos = require('../Scratch/scratchVideoObjects');

export class CurrentVideo extends React.Component {

  componentDidMount() {
    // console.log(this.props);
    // this.props.dispatch(getLesson(this.props.path[0].path))
  }

  buttonClickHandler() {
    console.log('buttonClicked');
  }

  render() {
    console.log('this rannnnnn', this.props.user);
    const opts = {    
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        'origin':'http://localhost:3000',
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <section className="classroom-section">
        <div className="video-player-container">
          <header className="video-header">
            <h2 className="video-title">HTML Crash Course For Absolute Beginners</h2>
          </header>
          <YouTube className="video-player"
          //=======================Connect this line with state==================================
            // videoId={this.props.videos[this.props.path.index].id}
            opts={opts}
            host='http://localhost:3000'
            onReady={this._onReady}
            onEnd={()=>this.buttonClickHandler()} 
          />
          <footer className="video-footer">
            <h2>Show Notes</h2>
            <p className="video-recap">
              To recap, in this video you took your first steps into website development by learning some of the fundamentals of HTML! You learned about core elements such as the div, p, img, and button tag.
            </p>
            <h3 className="video-creator-title">Content Creator - Traversy Media</h3>
            <ul>
              <li>
                <a className="video-creator-link" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              </li>
              <li>
                <a className="video-creator-link" href="https://www.patreon.com/traversymedia" target="_blank" rel="noopener noreferrer">Patreon</a>
              </li>
            </ul>
          </footer>
        </div>
        <Repl />
      </section>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  lesson: state.paths.lesson
});

export default connect(mapStateToProps)(CurrentVideo);