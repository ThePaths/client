import React from "react";
import { connect } from "react-redux";
import "./youtube.css";
import YouTube from "react-youtube";

export class YoutubePlayer extends React.Component {
  render() {
    const opts = {
      playerVars: {
        origin: "https://www.youtube.com",
        rel: 0,
        showinfo: 0
      }
    };

    if (!this.props.loading) {
      return (
        <div className="video-player-container">
          <header className="video-header">
            <h2 className="video-title">{this.props.display.title}</h2>
          </header>
          <YouTube
            className="video-player"
            videoId={this.props.display.videos[0].videoId}
            opts={opts}
            host="https://www.youtube.com"
            onReady={this._onReady}
            onEnd={() => console.log("End Of Video")}
          />
          <footer className="video-footer">
            <h2>Show Notes</h2>
            <p className="video-recap">{this.props.display.description}</p>
            <p>
              Video Creator:{" "}
              <a
                className="video-creator-link"
                href={this.props.creatorLink}
                target="_blank"
                rel="noopener"
              >
                {this.props.creatorName}
              </a>
            </p>
          </footer>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  display: state.guests.classroom,
  loading: state.guests.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(YoutubePlayer);
