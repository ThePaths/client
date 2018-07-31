import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './currentPaths.css';
export function CurrentPaths(props) {
  let currentPath;
  if (props.current.length > 0) {
    currentPath = props.current.map((path, index) => {
<<<<<<< HEAD
      return (<li>
        <Link key={index} to={`/dashboard/overview/${path.path.id}`}>
          <p>{path.path.title}</p>
          <img src={path.path.hero} alt='' className="heroImage" />
        </Link>
=======
      return (
        <li key={index} onClick={ () => {window.location.href = `/dashboard/overview/${path.path.id}`;} }>
          <p>{path.path.title}</p>
          <img src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${path.path.id}`} alt='' className="heroImage" />
>>>>>>> d7b73fc0ac449b6fd968db164e1c92677e893b8d
        </li>
      );
    });
  } else {
    currentPath = <li>
      <p>You are currently following no paths, go to explore to find some</p>
<<<<<<< HEAD
      <Link to={'/dashboard/explore'}><button className="currentPathsBUtton"
        >Explore</button>
       </Link> 
    </li>
=======
      <button className="currentPathsBUtton"
        onClick={() => window.location.href = '/dashboard/explore'}>Explore</button>
        
    </li>;
>>>>>>> d7b73fc0ac449b6fd968db164e1c92677e893b8d
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

<<<<<<< HEAD
export default withRouter(connect(mapStateToProps)(CurrentPaths))
=======
export default connect(mapStateToProps)(CurrentPaths);
>>>>>>> d7b73fc0ac449b6fd968db164e1c92677e893b8d
