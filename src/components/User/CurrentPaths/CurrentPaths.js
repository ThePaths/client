import React from 'react';
import { connect } from 'react-redux';

export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.path.title}</p>
          <img src={path.path.hero} alt='' />
        </li>
      )
    })
  } else {
    currentPath = <li><p>You are currently following no paths, go to explore to find some</p><button onClick={() => window.location.href = '/dashboard/explore'}>Explore</button></li>
  }

  return (
    <div>
      <ul>
        {currentPath}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  current: state.userPaths.current || 0
})

export default connect(mapStateToProps)(CurrentPaths)