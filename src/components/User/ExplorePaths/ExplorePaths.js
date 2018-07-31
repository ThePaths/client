import React from 'react';
import {connect} from 'react-redux';
import { fetchPaths } from '../../../actions/EXPLORE/paths';
import './explorePaths.css';


class ExplorePaths extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaths());
  }

  render() {
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={ index } className="exploreBoxes"
          onClick={ () => {window.location.href = `/dashboard/overview/${path.id}`;} }>         
          <img 
            src={ `https://res.cloudinary.com/thepaths/image/upload/v1533070510/thumbnails/${path.id}.png` } 
            alt=''className="heroImage"/>
          <h3 className='path-title'>{ path.title }</h3> 
          <p className='path-description'>{ path.description }</p>         
          {/* <button className='view-path-button'
            onClick={ () => {window.location.href = `/dashboard/overview/${path.id}`;} }>
            View Path</button> */}
        </li>
      );
    });

    return (
      <div>
        <h2>Choose from these many wonderful Paths</h2>
        <ul>
          { paths }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  paths: state.paths.paths,
  current: state.auth.currentUser
});

export default connect(mapStateToProps)(ExplorePaths);