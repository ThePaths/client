import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './youtube.css';
import Repl from '../Repl/Repl';
import YouTube from 'react-youtube';
import { fetchGuestClassroom } from '../../actions/guestPaths';
import InstructionModal from '../Modal/InstructionModal';



export class YoutubePlayer extends React.Component {

 

  

  render() {
    console.log(this.props)
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
            <header className="video-header">
              <h2 className="video-title">{this.props.display.title}</h2>
            </header>
            <YouTube className="video-player"
              videoId={this.props.display.videos[0].videoId}
              opts={opts}
              host='https://www.youtube.com'
              onEnd={() => this.buttonClickHandler()}
            />
            <footer className="video-footer">
              <h2>Show Notes</h2>
              <p className="video-recap">
                {this.props.display.description}
              </p>
            </footer>
          </div>
      );
    }
    
  }


const mapStateToProps = state => ({
  display: state.guests.classroom,
  loading: state.guests.loading,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(YoutubePlayer);