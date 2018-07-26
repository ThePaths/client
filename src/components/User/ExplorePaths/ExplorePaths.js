import React from 'react';
import {connect} from 'react-redux';
import { fetchPaths } from '../../../actions/paths';
import './explorePaths.css';


class ExplorePaths extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaths());
  }

  render() {
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={index} className="exploreBoxes">
          <p>{path.title}</p>          
          <img src={path.hero} alt=''/>
          <p>{path.description}</p>         
          <button onClick={() =>{ window.location.href = `/dashboard/overview/${path.id}`;}}>View Path</button>
        </li>
      );
    });

    return (
      <div>
        <h2>Choose from these many wonderful Paths</h2>
        <ul>
          {paths}
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