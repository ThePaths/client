import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import './CurrentVideo.css';
import Repl from '../Repl/Repl';
import YouTube from 'react-youtube';
import { fetchGuestClassroom } from '../../actions/guestPaths';
import InstructionModal from '../Modal/InstructionModal';
export class CurrentVideo extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    this.props.dispatch(fetchGuestClassroom(id))
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps)
  //   if (prevProps.loggedIn && !this.props.loggedIn) {
  //     // Stop refreshing when we log out
  //     <Redirect to="/" />;
  //   }
  // }

  buttonClickHandler() {
    console.log('buttonClicked');
  }

  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        'origin': 'https://www.youtube.com',
        rel: 0,
        showinfo: 0
      }
    };

    if (!this.props.loading) {
      return (
        
        <section className="classroom-section">
        <InstructionModal />
          <div className="video-player-container">
            <header className="video-header">
              <h2 className="video-title">{this.props.display.title}</h2>
            </header>
            <YouTube className="video-player"
              //=======================Connect this line with state==================================
              videoId={this.props.display.videos[0].videoId}
              opts={opts}
              host='https://www.youtube.com'
              onReady={this._onReady}
              onEnd={() => this.buttonClickHandler()}
            />
            <footer className="video-footer">
              <h2>Show Notes</h2>
              <p className="video-recap">
                {this.props.display.description}
              </p>
              {/* <h3 className="video-creator-title">Content Creator - Traversy Media</h3>
            <ul>
              <li>
                <a className="video-creator-link" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              </li>
              <li>
                <a className="video-creator-link" href="https://www.patreon.com/traversymedia" target="_blank" rel="noopener noreferrer">Patreon</a>
              </li>
            </ul> */}
            </footer>
          </div>
          <Repl repl={this.props.display.videos[0].replit}/>
        </section>
      );
    }
    return null;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

const mapStateToProps = state => ({
  display: state.guests.classroom,
  loading: state.guests.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CurrentVideo);