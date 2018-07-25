import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPaths } from '../../actions/userPaths';

export class PathOverview extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserPaths());
  }

  render() {
    return (
      <div className="path-overview-container">
        <section className="path-info-container">
          <h1>placeholder path title</h1>
          <p>placeholder path description</p>
          <div>
            {/* conditional btns go here */}
          </div>
        </section>
        <section className="path-videos-info-container">
          <ul>
            {/* render videos here */}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  path: state.userPaths.userPaths.displayPath,
  loading: state.userPaths.loading
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