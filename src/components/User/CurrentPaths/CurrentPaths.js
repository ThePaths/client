import React from 'react';
import { connect } from 'react-redux';
import '../UserPaths/userPaths.css';
export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
      return (
        <li className='path' key={index} onClick={ () => {window.location.href = `/dashboard/overview/${path.path.id}`} }>
          <p>{path.path.title}</p>
          <img src={path.path.hero} alt='' className="heroImage" />
        </li>
      )
    })
  } else {
    currentPath = <li className='empty' >
      <p>You are currently following no paths, go to explore to find some</p>
      <button className="currentPathsBUtton"
        onClick={() => window.location.href = '/dashboard/explore'}>Explore</button>
        
    </li>
  }

  return (
    <div className="Paths-Container">
    <h2>Keep Learning</h2>
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