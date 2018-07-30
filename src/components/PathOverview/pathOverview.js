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

  render() {
    if (!this.props.loading) {
      // add click event to redirect user to correct classroom
      let pathProgressBtn;
      if (this.props.path.status === 'current') {
        pathProgressBtn = <button onClick={() => window.location.href = `/dashboard/classroom/${this.props.path.id}/${this.props.lastVideoIndex}`}>Continue</button>;
      } else {
        pathProgressBtn = <button onClick={() => {
          if (this.props.status === 'saved') {
            this.removeFromSaved();
          }
          this.props.dispatch(addToUserCurrent(this.props.path.id));
          window.location.href = `/dashboard/classroom/${this.props.path.id}/0`;
        }}>Start</button>;
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
          <li key={index}>
            <div>
              <img src={`http://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                alt="Path Thumbnail" />
            </div>
            <div>
              {/* in css add checkmark to h2 with ::after */}
              <h2 className={videoTitleClass}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div>
              {/* add link to video's classroom */}
              <Link 
                onClick={() => {
                  if (this.props.status === 'saved') {
                    this.removeFromSaved()
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
            <h1>{this.props.path.title}</h1>
            <p>{this.props.path.videos[0].description}</p>
            <div>
              {this.props.status === 'completed' ? undefined : pathProgressBtn}
              {this.props.status === 'none' || this.props.status === 'saved' ? saveButton : undefined}
            </div>
          </section>
          <section className="path-videos-info-container">
            <ul>
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