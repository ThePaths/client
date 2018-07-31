import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import  UserPaths  from '../UserPaths/UserPaths';
import ExplorePaths from '../ExplorePaths/ExplorePaths';
import PathOverview from '../../PathOverview/pathOverview';

class Dashboard extends React.Component {

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
        <Route exact path='/dashboard' component={ UserPaths } />
        <Route exact path="/dashboard/explore" component={ ExplorePaths }/> 
        <Route exact path="/dashboard/overview/:id" component={ PathOverview }/> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  loading:state.auth.currentUser !== null,
});


export default requiresLogin()(connect(mapStateToProps)(Dashboard));
