import React from 'react';
import { connect } from 'react-redux';
import { fetchPathOverview, fetchUserClassroom, fetchCurrentPaths } from '../../../actions/userPaths';
import './classroom.css';
import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from './YoutubePlayer';

export class CurrentVideo extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatch(fetchPathOverview(id))
    this.props.dispatch(fetchCurrentPaths())
  }

  render() {
    if (!this.props.loading) {
      return (
        <section className="classroom-section">
          <InstructionModal />
          <h1>{this.props.currentVideo.videos[0].title}</h1>
          <YoutubePlayer video={ this.props.currentVideo.videos[0] }/>
          <Repl repl={ this.props.currentVideo.videos[0].replit }/>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  index: state.userPaths.current.index,
  loading: state.userPaths.loading,
  currentVideo: state.userPaths.overview,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CurrentVideo);