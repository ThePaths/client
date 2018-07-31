import React from 'react';
import { connect } from 'react-redux';
import '../UserPaths/userPaths.css';

export function CompletedPaths(props) {
  let completedPath;
  if (props.saved.length > 0) {
    completedPath = props.saved.map((path, index) => {
      return (
        <li className='path' key={ index } onClick={ () => {window.location.href = `/dashboard/overview/${path.id}`} }>
          <p>{ path.title }</p>
          <img src={ `https://res.cloudinary.com/thepaths/image/upload/v1533070510/thumbnails/${path.id}.png` } alt='' className="heroImage"/>
        </li>
      );
    });
  } else {
    completedPath = <li className='empty' ><p>You have not completed any paths.</p></li>
  }

  return (
    <div className="Paths-Container">
      <h2>Your Completed Paths</h2>
      <ul>
        { completedPath }
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  saved: state.userPaths.completed || 0
});

export default connect(mapStateToProps)(CompletedPaths);