import React from 'react';
import { connect } from 'react-redux';

export function CompletedPaths(props) {

  let completedPaths;
  if (props.completed.length > 0) {
    completedPaths = props.completed.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.title}</p>
          <img src={path.hero} alt='' />
        </li>
      )
    })
  } else {
     completedPaths = <li><p>You have not yet completed any paths</p></li>
  }

  return (
    <ul>
      {completedPaths}
    </ul>
  )
}

const mapStateToProps = state => ({
  completed: state.auth.currentUser.completedPaths
})

export default connect(mapStateToProps)(CompletedPaths)