import React from 'react';
import {connect} from 'react-redux'
import { fetchPaths } from '../../../actions/paths';

class Explore extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaths());
  }

  render() {
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.title}</p>
          <img src={path.hero} alt='' onClick={() => console.log(`${path.title} clicked`)} />
        </li>
      )
    })

    return (
      <ul>
        {paths}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  paths: state.paths.paths
})

export default connect(mapStateToProps)(Explore)