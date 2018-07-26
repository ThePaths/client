import React from 'react';
import { connect } from 'react-redux';
import './youtubePlayer.css';
import YouTube from 'react-youtube';

export class YoutubePlayer extends React.Component { 

  

  render() {
    const opts = {
      playerVars: { 
        autoplay: 1,
        'origin': 'https://www.youtube.com',
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <div className="video-player-container">
        <YouTube className="video-player"
          videoId={ this.props.video.videoId }
          opts={ opts }
          host='https://www.youtube.com'
          onEnd={ () => console.log('End Of Video') }
        />
        <div className="video-info-section">
          <header className="video-header">
            <h1>{this.props.title}</h1>
            <h2 className="video-title">{this.props.video.title}</h2>
          </header>
          <footer className="video-footer">
            <h3>Show Notes</h3>
            <p className="video-recap">
              {this.props.video.description}
            </p>
            <button onClick={() => this.props.nextBtnClicked()}>Next</button>
            <button onClick={() => this.props.nextBtnClicked()}>Next</button>
          </footer>
        </div>
      </div>
    );
  }    
}

const mapStateToProps = state => ({
  currentVideo: state.userPaths.overview,
  display: state.auth.currentUser.classroom,
  loading: state.auth.currentUser.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(YoutubePlayer);