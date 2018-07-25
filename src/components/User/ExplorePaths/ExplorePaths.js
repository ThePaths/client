import React from 'react';
import {connect} from 'react-redux';
import { fetchPaths } from '../../../actions/paths';



class ExplorePaths extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaths());
  }

  render() {
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.title}</p>          
          <img src={path.hero} alt=''/>
          <p>{path.description}</p>         
          <button onClick={() =>{ window.location.href = `/dashboard/overview/${path.id}`;}}>View Path</button>
        </li>
      );
    });

    return (
      <ul>
        {paths}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  paths: state.paths.paths,
  current: state.auth.currentUser
});

export default connect(mapStateToProps)(ExplorePaths);