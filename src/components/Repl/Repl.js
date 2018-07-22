import React from 'react';
import {connect} from 'react-redux'
import './Repl.css';

// testing for commit

export class Repl extends React.Component {
  render() {
    return (
      <iframe className="repl"
        title="firstAttempt"
        height="400px" 
        width="100%" 
        //=======================Connect this line with state==================================
        src={this.props.replit} 
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
 replit: state.paths.replit,
  // index: state.auth.currentUser.displayPath.index || null
});

export default connect(mapStateToProps)(Repl);