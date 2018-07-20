import React from 'react';
import { connect } from 'react-redux';

export function CurrentPath(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath =
      <li>
        <p>{props.current[0].title}</p>
        <img src={props.current[0].hero} alt='' />
      </li>
  } else {
    currentPath = <li><p>You are currently following no paths, go to explore to find some</p></li>
  }

  return (
    <ul>
      {currentPath}
    </ul>
  )
}

const mapStateToProps = state => ({
  current: state.auth.currentUser.currentPaths
})

export default connect(mapStateToProps)(CurrentPath)