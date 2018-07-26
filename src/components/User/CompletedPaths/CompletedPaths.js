import React from 'react';
import { connect } from 'react-redux';
import './completedPaths.css';

export function CompletedPaths(props) {
  let completedPath;
  if (props.saved.length > 0) {
    completedPath = props.saved.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.path.title}</p>
          <img src={path.path.hero} alt='' />
        </li>
      )
    })
  } else {
    completedPath = <li><p>You have not completed any paths.</p></li>
  }

  return (
    <div className="completedPathsContainer">
      <ul>
        {completedPath}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  saved: state.userPaths.completed || 0
})

export default connect(mapStateToProps)(CompletedPaths)