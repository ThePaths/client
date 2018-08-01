import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPathOverview } from '../../actions/GET/getActions';
import { addToUserSaved, addToUserCurrent } from '../../actions/PUT/putActions';
import { removeFromUserSaved } from '../../actions/DELETE/deleteActions';
import './pathOverview.css';
export class PathOverview extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatch(fetchPathOverview(id));
  }

  addToSaved() {
    let id = this.props.match.params.id;
    this.props.dispatch(addToUserSaved(id));
  }

  removeFromSaved() {
    let id = this.props.match.params.id;
    this.props.dispatch(removeFromUserSaved(id));
  }

  // ADD CLASSROOM REDIRECT FOR ENTIRE LI ON DESKTOP/LAPTOP DISPLAYS
  // linkToClassroom() {
  //   if (this.props.status === 'saved') {
  //     this.removeFromSaved();
  //     this.props.dispatch(addToUserCurrent(this.props.path.id));
  //   } else if (this.props.status !== 'current' && this.props.status !== 'completed') {
  //     this.props.dispatch(addToUserCurrent(this.props.path.id));
  //   }
  //   return <Redirect to={`/dashboard/classroom/${this.props.path.id}/${index}`}></Redirect>;
  // }
  

  render() {
    if (!this.props.loading) {
      // add click event to redirect user to correct classroom
      let pathProgressBtn;
      if (this.props.path.status === 'current') {
        pathProgressBtn = <Link to={`/dashboard/classroom/${this.props.path.id}/${this.props.lastVideoIndex}`}>
          <button className="path-progress-btn">Continue</button></Link>;
      } else {
        pathProgressBtn = <Link to={`/dashboard/classroom/${this.props.path.id}/0`}>
          <button
            className="path-progress-btn" 
            onClick={() => {
              if (this.props.status === 'saved') {
                this.removeFromSaved();
              }
              this.props.dispatch(addToUserCurrent(this.props.path.id));
            }}>Start</button>
        </Link>;
      }

      let saveButton;
      if (this.props.status === 'saved') {
        saveButton = <button
          onClick={() => this.removeFromSaved()}>
          Unsave
        </button>;
      } else {
        saveButton = <button
          onClick={() => this.addToSaved()}>
          Save
        </button>;
      }

      let completedVideos = this.props.path.completedVideos;
      let videos = this.props.path.videos.map((item, index) => {
        let videoTitleClass;
        if (completedVideos) {
          if (completedVideos[index] === true) {
            videoTitleClass = 'overview-video-title completed';
          } else videoTitleClass = 'overview-video-title';
        }
        return (
          <li key={index} className="path-video-container">
            <div className="path-img-container">
              <img 
                src={`http://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                alt="Path Thumbnail" />
            </div>
            <div>
              {/* in css add checkmark to h2 with ::after */}
              <h2 className={videoTitleClass}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="go-btn-container">
              {/* add link to video's classroom */}
              <Link 
                className="go-btn"
                onClick={() => {
                  if (this.props.status === 'saved') {
                    this.removeFromSaved();
                    this.props.dispatch(addToUserCurrent(this.props.path.id));
                  } else if (this.props.status !== 'current' && this.props.status !== 'completed') {
                    this.props.dispatch(addToUserCurrent(this.props.path.id));
                  }
                }}
                to={`/dashboard/classroom/${this.props.path.id}/${index}`}
              >Go &gt;</Link>
            </div>
          </li>
        );
      });

      return (
        <div className="path-overview-container">
          <section className="path-info-container">
            <h1 className="overview-path-title">{this.props.path.title}</h1>
            <p>{this.props.path.description}</p>
            <div className="progress-btn-container">
              {this.props.status === 'completed' ? undefined : pathProgressBtn}
              {this.props.status === 'none' || this.props.status === 'saved' ? saveButton : undefined}
            </div>
          </section>
          <section className="path-videos-info-container">
            <ul className="path-videos-list">
              {videos}
            </ul>
          </section>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  lastVideoIndex: state.userPaths.lastVideoIndex,
  path: state.userPaths.overview,
  status: state.userPaths.status,
  loading: state.userPaths.overviewLoading
});

export default connect(mapStateToProps)(PathOverview);