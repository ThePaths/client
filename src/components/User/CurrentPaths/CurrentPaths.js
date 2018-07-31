import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './currentPaths.css';
export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
      return (
        <li className='path' key={index} onClick={ () => {window.location.href = `/dashboard/overview/${path.path.id}`} }>
        <Link key={index} to={`/dashboard/overview/${path.path.id}`}>
          <img src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${path.path.id}`} alt='' className="heroImage" />
          <p>{path.path.title}</p>
        </Link>
        </li>
      );
    });
  } else {
    currentPath = <li>
      <p>You are currently following no paths, go to explore to find some</p>
      <Link to={'/dashboard/explore'}><button className="currentPathsBUtton"
        >Explore</button>
       </Link> 
    </li>
  }

  return (
    <div className="currentPathsContainer">
      <h2>Keep Learning</h2>
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
