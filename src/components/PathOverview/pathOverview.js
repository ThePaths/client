import React from 'react'
import { connect } from 'react-redux';

export class PathOverview extends React.Component {
  render() {
    const videos = this.props.path.videos.map((video, index) => {
      return (
        <li key={index}>
          <img src={`http://img.youtube.com/vi/${video.videoId}/1.jpg`} alt='FIX' />
        </li>
      )
    })
    return (
      <div>
        <h2>{this.props.path.title}</h2>
        <p>{this.props.path.description}</p>
        <ul>{videos}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  path: state.auth.currentUser.displayPath
})

export default connect(mapStateToProps)(PathOverview);