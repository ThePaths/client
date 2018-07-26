import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPathOverview, addToUserSaved } from '../../actions/userPaths';

export class PathOverview extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatch(fetchPathOverview(id));
  }

  addToSaved() {
    let id = this.props.match.params.id;
    this.props.dispatch(addToUserSaved(id));
  }

  render() {
    if (!this.props.loading) {
      // add click event to redirect user to correct classroom
      let pathProgressBtn;
      if (this.props.path.status === 'current') {
        pathProgressBtn = 'Continue';
      } else {
        pathProgressBtn = 'Start';
      }

      let saveButton;
      if (this.props.path.status === 'saved') {
        saveButton = <button>
          {/* add click () => to unsave */}
          Unsave
        </button>;
      } else {
        saveButton = <button 
          onClick={() => this.addToSaved()}>
          Save
        </button>;
      }

      let videos = this.props.path.videos.map((item, index) => {
        return (
          <li key={ index }>
            <div>
              <img src={ `http://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` } 
                alt="Path Thumbnail" />
            </div>
            <div>
              {/* in css add checkmark to h2 with ::after */}
              <h2>{ item.title }</h2>
              <p>{ item.description }</p>
            </div>
            <div>
              {/* add link to path's classroom */}
              <Link to={`/dashboard/classroom/${item.id}`}>Go &gt;</Link>
            </div>
          </li>
        );
      });

      return (
        <div className="path-overview-container">
          <section className="path-info-container">
            <h1>{ this.props.path.title }</h1>
            <p>{ this.props.path.videos[0].description }</p>
            <div>
              <Link to='/classroom'>
                { pathProgressBtn }
              </Link>
              {saveButton}
            </div>
          </section>
          <section className="path-videos-info-container">
            <ul>
              { videos }
            </ul>
          </section>
        </div>
      );
    } 
    return null;
  }
}

const mapStateToProps = state => ({
  path: state.userPaths.overview,
  loading: state.userPaths.overviewLoading
});

export default connect(mapStateToProps)(PathOverview);