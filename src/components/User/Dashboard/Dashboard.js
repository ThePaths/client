import React from 'react';
//import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchUserPaths } from '../../../actions/userPaths';

import CurrenPaths from '../CurrentPaths/CurrentPaths';
import CompletedPaths from '../CompletedPaths/CompletedPaths';
import SavedPaths from '../SavedPaths/SavedPaths';



class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserPaths());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
          <CurrenPaths/>
          <SavedPaths/>
          <CompletedPaths/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  completedPaths: state.userPaths.userPaths.completedPaths,
  currentPaths: state.userPaths.userPaths.currentPaths,
  savedPaths: state.userPaths.userPaths.savedPaths
});


export default requiresLogin()(connect(mapStateToProps)(Dashboard));
