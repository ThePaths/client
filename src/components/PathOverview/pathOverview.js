import React from 'react';
import { connect } from 'react-redux';
import { fetchPathOverview } from '../../actions/userPaths';

export class PathOverview extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    this.props.dispatch(fetchPathOverview(id));
  }

  render() {
    if (!this.props.loading) {
      let videos = this.props.path.videos.map((item, index) => {
        return (
          <li key={index}><p>{item.title}</p></li>
        );
      });
      return (
        <div className="path-overview-container">
          <section className="path-info-container">
            <h1>{this.props.path.title}</h1>
            <p>{this.props.path.videos[0].description}</p>
            <div>
              {/* conditional btns go here */}
            </div>
          </section>
          <section className="path-videos-info-container">
            <ul>
              {videos}
              {/* render videos here */}
              {/* <div>{this.props.path.videos[0].description}</div> */}

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