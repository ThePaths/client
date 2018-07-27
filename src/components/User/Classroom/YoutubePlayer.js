import React from 'react';
import './youtubePlayer.css';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.Component {

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
          videoId={this.props.video.videoId}
          opts={opts}
          host='https://www.youtube.com'
          onEnd={() => this.props.completed()}
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
            
           {(!this.props.completedVideos[this.props.index])?
            <button onClick={() => this.props.completed()}>Complete</button>:null} 
          </footer>
        </div>
      </div>
    );
  }
}
