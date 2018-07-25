import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './CurrentVideo.css';
import Repl from '../Repl/Repl';
import YouTube from 'react-youtube';
import { fetchUserPaths } from '../../actions/userPaths';

export class CurrentVideo extends React.Component {

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchUserPaths());
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      <Redirect to="/" />;
    }
  }

  buttonClickHandler() {
    console.log('buttonClicked');
  }

  render() {
    const opts = {
      playerVars: { 
        autoplay: 1,
        'origin': 'https://www.youtube.com',
        rel: 0,
        showinfo: 0
      }
    };
    if (!this.props.loading) {
      return (
        <section className="classroom-section">
          <div className="video-player-container">
            <header className="video-header">
              <h2 className="video-title">{this.props.display.title}</h2>
            </header>
            <YouTube className="video-player"
              videoId={this.props.display.videos[this.props.display.index].videoId}
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
            </footer>
          </div>
          <Repl repl={this.props.display.videos[this.props.display.index].replit}/>
        </section>
      );
    }
    return (
      null
    );
  }


  _onReady(event) {
  // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

const mapStateToProps = state => ({
  display: state.userPaths.userPaths.displayPath,
  loading: state.userPaths.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CurrentVideo);