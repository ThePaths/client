import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPathOverview } from '../../actions/userPaths';

export class PathOverview extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatch(fetchPathOverview(id));
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

      // add functionality to save path
      let saveButton;
      if (this.props.path.status === 'saved') {
        saveButton = '';
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
              <Link to='/'>Go &gt;</Link>
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
              { saveButton }
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



// reference code
// if(!this.props.loading) {
//   const videos = this.props.path.videos.map((video, index) => {
//     return (
//       <li key={index}>
//         <h2>{this.props.path.title}</h2>
//         <p>{this.props.path.description}</p>
//         <img src={`http://img.youtube.com/vi/${video.videoId}/1.jpg`} alt='FIX' 
//           onClick={() => window.location.href = '/classroom'}
//         />
     
//       </li>
//     );
//   });
//   return (
//     <div>
//       <h2>{this.props.path.title}</h2>
//       <p>{this.props.path.description}</p>
//       <ul>{videos}</ul>
//     </div>
//   );
// }
// return (
//   null
// );