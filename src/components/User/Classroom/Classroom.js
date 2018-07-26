import React from 'react';
import { connect } from 'react-redux';
import { fetchPathOverview, fetchUserClassroom, fetchCurrentPaths } from '../../../actions/userPaths';
import './classroom.css';
import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from './YoutubePlayer';

export class CurrentVideo extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchPathOverview(id));
    this.props.dispatch(fetchCurrentPaths());
  }

  nextBtnClicked() {
    const index = this.props.match.params.videoIndex;
    const id = this.props.match.params.id;
    let nextIndex = parseInt(index, 10);
    nextIndex += 1;
    
    
    if(nextIndex === this.props.overview.videos.length){
      window.location.href = `/dashboard/classroom/${id}/0`
    } else { window.location.href = `/dashboard/classroom/${id}/${nextIndex}` }
   
  }

  render() {
    // USER STORIES
    // ="/dashboard/classroom/:id/:videoIndex
    // thats the endpoint for classroom
    // videoindex is taken from whatever video you click
    // and the classroom componenet uses that index to populate the videos and replits
    // need a next button
    // that either takes you to /dashboard/classroom/:id/:videoIndex+1
    // or a completed button if at the final video in that path

    

    if (!this.props.loading) {
      const index = parseInt(this.props.match.params.videoIndex, 10);
      

      return (
        <section className="classroom-section">
          <InstructionModal />
          <YoutubePlayer
            video={ this.props.overview.videos[index] }
            title={this.props.overview.title}
            nextBtnClicked={() => this.nextBtnClicked()} />
          <Repl repl={ this.props.overview.videos[index].replit }/>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  loading: state.userPaths.overviewLoading,
  overview: state.userPaths.overview,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CurrentVideo);