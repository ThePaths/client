import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentPaths } from '../../../actions/userPaths';
import './classroom.css';
//import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from './YoutubePlayer';


export class CurrentVideo extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    this.props.dispatch(fetchCurrentPaths())
   
  }

  render() {
    if (!this.props.loading) {
      return (
        <section className="classroom-section">
          <InstructionModal />
          <YoutubePlayer props={ this.props }/>
          {/* <Repl repl={ this.props.display.videos[0].replit }/> */}
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  //display: state.userPaths.current[0].videos,
  loading: state.userPaths.loading,
  //currentVideo: state.userPaths.current[0].videos,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CurrentVideo);