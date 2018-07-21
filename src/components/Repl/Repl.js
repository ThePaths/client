import React from 'react';
import {connect} from 'react-redux';
import './Repl.css';
const videos = require('../Scratch/scratchVideoObjects');

export class Repl extends React.Component {
  render() {
    return (
      <iframe className="repl"
        title="firstAttempt"
        height="400px" 
        width="100%" 
        //=======================Connect this line with state==================================
        // src={this.props.repl[this.props.index]} 
        scrolling="no" 
        frameBorder="no"
        allowtransparency="true" 
        allowFullScreen="true" 
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
      </iframe>
    );
  }
}

const mapStateToProps = state => ({
  // repl: state.auth.currentUser.displayPath.videos || null,
  // index: state.auth.currentUser.displayPath.index || null
});

export default connect(mapStateToProps)(Repl);