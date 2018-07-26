import React from 'react';
import { connect } from 'react-redux';
import './savedPaths.css';
export function SavedPaths(props) {
  let savedPath;
  if (props.saved.length > 0) {
    savedPath = props.saved.map((path, index) => {
      return (
        <li key={ index }>
          <p>{ path.title }</p>
          <img src={ path.hero } alt='' className="heroImage"/>
        </li>
      )
    })
  } else {
    savedPath = <li><p>You currently have no saved paths, go to explore to find some</p><button onClick={() => window.location.href = '/dashboard/explore'}>Explore</button></li>
  }

  return (
    <div className="savedPathsContainer">
      <ul>
        { savedPath }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  saved: state.userPaths.saved || 0
})

export default connect(mapStateToProps)(SavedPaths)