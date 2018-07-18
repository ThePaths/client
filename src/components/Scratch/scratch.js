import React from 'react';
import YouTube from 'react-youtube';
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
      <div>
      <YouTube
        videoId={videos[2].id}
        opts={opts}
        host='http://localhost:3000'
        onReady={this._onReady}
        onEnd={()=>console.log("Go func yourself")} 
      />
      <iframe title='Repl.it' frameBorder="0" width="100%" height="500px" src="https://repl.it/Dn6S?lite=true"></iframe>
      </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}