import React from 'react';
import { connect } from 'react-redux';
import '../UserPaths/userPaths.css';
export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
      return (
<<<<<<< HEAD
        <li className='path' key={index} onClick={ () => {window.location.href = `/dashboard/overview/${path.path.id}`} }>
=======
        <li key={index} onClick={ () => {window.location.href = `/dashboard/overview/${path.path.id}`;} }>
>>>>>>> d7b73fc0ac449b6fd968db164e1c92677e893b8d
          <p>{path.path.title}</p>
          <img src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${path.path.id}`} alt='' className="heroImage" />
        </li>
      );
    });
  } else {
    currentPath = <li className='empty' >
      <p>You are currently following no paths, go to explore to find some</p>
      <button className="currentPathsBUtton"
        onClick={() => window.location.href = '/dashboard/explore'}>Explore</button>
        
    </li>;
  }

  return (
<<<<<<< HEAD
    <div className="Paths-Container">
    <h2>Keep Learning</h2>
=======
    <div className="currentPathsContainer">
      <h2>Keep Learning</h2>
>>>>>>> d7b73fc0ac449b6fd968db164e1c92677e893b8d
      <ul>
        {currentPath}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  current: state.userPaths.current || 0
});

export default connect(mapStateToProps)(CurrentPaths);