import {React, Component} from 'React';
import YouTube from 'react-youtube';
import './CurrentVideo.css';

export default class CurrentVideo extends Component {


  render() {
    return (
      <YouTube className="?????"
//=======================Connect this line with state==================================
        videoId={videos[this.state.currentVideoIndex].id}
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