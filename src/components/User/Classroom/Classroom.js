import React from 'react';
import { connect } from 'react-redux';
import { fetchPathOverview } from '../../../actions/GET/getActions';
import { changeLastVideoIndex, userCompletedVideo } from '../../../actions/PUT/putActions';
import './classroom.css';
import Repl from '../../Repl/Repl';
import InstructionModal from '../../Modal/InstructionModal';
import YoutubePlayer from './YoutubePlayer';
import { Link } from 'react-router-dom';
export class Classroom extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchPathOverview(id));
  }

  componentDidUpdate() {
    const id = this.props.match.params.id;
    const index = parseInt(this.props.match.params.videoIndex, 10);
    if (this.props.status === 'current') {
      this.props.dispatch(changeLastVideoIndex(id, index));
    }
  }

  nextBtnClicked() {
    const index = this.props.match.params.videoIndex;
    const id = this.props.match.params.id;
    let nextIndex = parseInt(index, 10);
    nextIndex += 1;
    if (nextIndex === this.props.overview.videos.length) {
      this.props.history.push(`/dashboard/classroom/${id}/0`);
    
     
    } else {
      this.props.history.push(`/dashboard/classroom/${id}/${nextIndex}`);
    }}


  handleCompletedCourses() {
    const videoIndex = this.props.match.params.videoIndex;
    const pathId = this.props.match.params.id;
    this.props.dispatch(userCompletedVideo(pathId, videoIndex));
    document.getElementById('completedButton').className = 'hideCompleted';
  }


  render() {

    if (!this.props.loading) {
      const index = parseInt(this.props.match.params.videoIndex, 10);

      return (
        <section className="classroom-section">
          <Link to={`/dashboard/overview/${this.props.match.params.id}`}>Back to Overview</Link>
          
          <YoutubePlayer
            index={index}
            completedVideos={this.props.completedVideos}
            completed={() => this.handleCompletedCourses()}
            video={this.props.overview.videos[index]}
            title={this.props.overview.title}
            creatorLink={this.props.overview.videos[index].creator.youtube}
            creatorName={this.props.overview.videos[index].creator.name}
            nextBtnClicked={() => this.nextBtnClicked()} />
          <Repl repl={this.props.overview.videos[index].replit} title="replit"/>
          <InstructionModal />
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
  completedVideos: state.userPaths.completedVideos
});

export default connect(mapStateToProps)(Classroom);