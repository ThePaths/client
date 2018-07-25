import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchCurrentPaths, fetchSavedPaths } from '../../../actions/userPaths';
import  UserPaths  from '../UserPaths/UserPaths';
import ExplorePaths from '../ExplorePaths/ExplorePaths';


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCurrentPaths());
    this.props.dispatch(fetchSavedPaths())
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
          <Route exact path='/dashboard' component={ UserPaths } />
          <Route exact path="/dashboard/explore" component={ ExplorePaths }/> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});


export default requiresLogin()(connect(mapStateToProps)(Dashboard));
