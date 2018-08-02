import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../UserPaths/userPaths.css';

export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
      let progress;
      let divide = 0;
      for (let i = 0; i <= path.completedVideos.length; i++) {
        if (path.completedVideos[i] === true) {
          divide += 1;
        }
      }
      if (divide > 0) {
        progress = (divide / path.completedVideos.length) * 100
      } else {
        progress = divide
      }
      return (
        <li className='path' key={index}>
          <Link to={`/dashboard/overview/${path.path.id}`}>
            <img src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${path.path.id}.png`} alt='' className="heroImage" />
            <p>{path.path.title}</p>
            <p>{progress}% completed</p>
          </Link>
        </li>
      );
    });
  } else {
    currentPath = <li className='empty' >
      <p>You are currently following no paths, go to explore to find some</p>
      <Link to={'/dashboard/explore'}><button className="currentPathsBUtton"
      >Explore</button>
      </Link>
    </li>
  }

  return (
    <div className="Paths-Container">
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
