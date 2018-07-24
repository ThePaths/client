import React from 'react';
import {connect} from 'react-redux'
import { fetchPaths } from '../../../actions/paths';
import { setUserDisplay } from '../../../actions/userPaths';
import { addToUserSaved } from '../../../actions/userPaths';

class Explore extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaths());
  }

  render() {
    const paths = this.props.paths.map((path, index) => {
      return (
        <li key={index}>
          <p>{path.title}</p>
          <img src={path.hero} alt=''/>
          <button onClick={() => {
            console.log(path.id)
            this.props.dispatch(addToUserSaved(path.id))
            // window.location.href = '/dashboard/path-overview'
          }}>Save Path</button>
          <button onClick={() => {
              this.props.dispatch(setUserDisplay(path.id))
              window.location.href = '/dashboard/path-overview'
            }
          }>View Path</button>
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
  paths: state.paths.paths,
  current: state.auth.currentUser
})

export default connect(mapStateToProps)(Explore)