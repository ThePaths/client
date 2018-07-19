import {React, Component} from 'React';
import './CurrentVideo.css';

let videos = require('./scratchVideoObjects');


export default class CurrentVideo extends Component {


  render() {
    return (
      <YouTube className="?????"
//=======================Connect this line with state==================================
        videoId={videos[0].id}
        opts={opts}
        host='http://localhost:3000'
        onReady={this._onReady}
        onEnd={()=>this.buttonClickHandler()} 
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}