import React from 'react';
import YouTube from 'react-youtube';
import './scratch.css';
let videos = require('./scratchVideoObjects');



console.log(videos);
export default class Scratch extends React.Component {
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
      <div className="scratch">
      <YouTube
        videoId={videos[2].id}
        opts={opts}
        host='http://localhost:3000'
        onReady={this._onReady}
        onEnd={()=>console.log("Go func yourself")} 
      />
      <iframe className="replItIframe" title="firstAttempt" height="600px" width="45%" src="https://repl.it/@Dameon1/DemandingRecentMonotone?lite=true" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}