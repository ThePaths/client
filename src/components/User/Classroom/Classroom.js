import React from 'react';
import { connect } from 'react-redux';
import { fetchPathOverview, changeLastVideoIndex, userCompletedVideo } from '../../../actions/userPaths';
import './classroom.css';
import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from './YoutubePlayer';

export class Classroom extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    const index = parseInt(this.props.match.params.videoIndex, 10);
    this.props.dispatch(fetchPathOverview(id));
    this.props.dispatch(changeLastVideoIndex(id, index))
}

  nextBtnClicked() {
    const index = this.props.match.params.videoIndex;
    const id = this.props.match.params.id;
    let nextIndex = parseInt(index, 10);
    nextIndex += 1;
    if (nextIndex === this.props.overview.videos.length) {
      window.location.href = `/dashboard/classroom/${id}/0`;
    } else { window.location.href = `/dashboard/classroom/${id}/${nextIndex}`; }
  }


  handleCompletedCourses() {
    const videoIndex = this.props.match.params.videoIndex;
    const pathId = this.props.match.params.id;
    this.props.dispatch(userCompletedVideo(pathId, videoIndex))
    document.getElementById("completedButton").className = "hideCompleted";
   }

  render() {

    if (!this.props.loading) {
      const index = parseInt(this.props.match.params.videoIndex, 10);


      return (
        <section className="classroom-section">

          <InstructionModal />
          <YoutubePlayer
            index={index}
            completedVideos={this.props.completedVideos}
            completed={() => this.handleCompletedCourses()}
            video={this.props.overview.videos[index]}
            title={this.props.overview.title}
            nextBtnClicked={() => this.nextBtnClicked()} />
          <Repl repl={this.props.overview.videos[index].replit} />
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  loading: state.userPaths.overviewLoading,
  overview: state.userPaths.overview,
  status: state.userPaths.status,
  loggedIn: state.auth.currentUser !== null,
  completedVideos: state.userPaths.completedVideos,
});

export default connect(mapStateToProps)(Classroom);