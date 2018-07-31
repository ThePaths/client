import React from 'react';
import './youtubePlayer.css';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.Component {

  render() {
   
    const opts = {
      playerVars: {
        'origin': 'https://www.youtube.com',
        rel: 0,
        showinfo: 0
      }
    };
    let completeButton;
    if (this.props.completedVideos && !this.props.completedVideos[this.props.index]) {
      completeButton = <button id="completedButton" onClick={() => this.props.completed()}>Complete</button>;
    } else {
      completeButton = null;
    }

    console.log(this.props.creatorLink);
    
    return (
      <div className="video-player-container">
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
            <p>Video Creator: <a href={this.props.creatorLink} target="_blank" rel="noopener">{this.props.creatorName}</a></p>
            <button onClick={() => this.props.nextBtnClicked()}>Next</button>
            {completeButton}
          </footer>
        </div>
        <YouTube className="video-player"
          videoId={this.props.video.videoId}
          opts={opts}
          
          player= 'null'
          host='https://www.youtube.com'
          onEnd={() => this.props.completed()}
        />
      
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
