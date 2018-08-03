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
      completeButton = <button className="youtubeButtons" onClick={() => this.props.completed()}>Complete</button>;
    } else {
      completeButton = null;
    }

    return (
      <div className="video-player-container">
      <header className="video-header">
            <h1>{this.props.title}</h1>
            
          </header>
        <YouTube className="video-player"
          videoId={this.props.video.videoId}
          opts={opts}
          
          player= 'null'
          host='https://www.youtube.com'
          onEnd={() => this.props.completed()}
        />
        <div className="video-info-section">
          
          <footer className="video-footer">
            <h2>Show Notes</h2>
            <p className="video-recap">
              {this.props.video.description}
            </p>
            <p>Video Creator: <a className='video-creator-link' href={this.props.creatorLink} target="_blank" rel="noopener">{this.props.creatorName}</a></p>
            <button className="youtubeButtons" onClick={() => this.props.nextBtnClicked()}>Next</button>
            {completeButton}
          </footer>
        </div> 
      
      </div>
    );
  }
 
}
