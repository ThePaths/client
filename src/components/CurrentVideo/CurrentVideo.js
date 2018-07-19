import {React, Component} from 'React';
import './CurrentVideo.css';

export default class CurrentVideo extends Component {


  render() {
    return (
      <YouTube
      videoId='bCjWAI2lC20'
      opts={opts}
      host='http://localhost:3000'
      onReady={this._onReady}
      onEnd={()=>console.log("Go func yourself")} 
    />
    );
  }
}