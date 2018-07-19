import React from 'react';
import YouTube from 'react-youtube';
import './scratch.css';
const videos = require('./scratchVideoObjects');



console.log(videos);
export default class Scratch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentVideoIndex:0
    };
  }
  
  buttonClickHandler(){
    console.log('buttonClicked');
    if(this.state.currentVideoIndex === 2){
      return  this.setState({
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
      <div>
       
        <div className='scratch'>
     
          <YouTube className="youtubePlayer"
            videoId={videos[this.state.currentVideoIndex].id}
            opts={opts}
            host='http://localhost:3000'
            onReady={this._onReady}
            onEnd={()=>this.buttonClickHandler()} 
          />
      
     
          <div>
            <iframe className="replItIframe"
              title="firstAttempt"
              height="400px" 
              width="100%" 
              src={videos[this.state.currentVideoIndex].replit} 
              scrolling="no" 
              frameBorder="no"
              allowtransparency="true" 
              allowFullScreen="true" 
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
            </iframe>
          </div>
      
        </div>
        <button onClick={()=>this.buttonClickHandler()}>Button</button>
      </div>
        
     
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}