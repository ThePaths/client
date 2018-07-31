import React from 'react';
import { connect } from 'react-redux';
import './savedPaths.css';
export function SavedPaths(props) {
  let savedPath;
  if (props.saved.length > 0) {
    savedPath = props.saved.map((path, index) => {
      return (
        <li className='path-container' key={ index } onClick={ () => {window.location.href = `/dashboard/overview/${path.id}`} }>
          <img src={ `https://res.cloudinary.com/thepaths/image/upload/v1533070510/thumbnails/${path.id}.png` } alt='' className="heroImage"/>
          <p>{ path.title }</p>
        </li>
      );
    });
  } else {
    savedPath = <li className='empty'><p>You currently have no saved paths, go to explore to find some</p><button onClick={() => window.location.href = '/dashboard/explore'}>Explore</button></li>;
  }

  return (
    <div className="savedPathsContainer">
      <h2>Your Saved Paths</h2>
      <ul>
        { savedPath }
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  saved: state.userPaths.saved || 0
});

export default connect(mapStateToProps)(SavedPaths);