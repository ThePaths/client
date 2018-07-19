import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import { clearAuth } from '../../../actions/auth';
import { clearAuthToken } from '../../../local-storage';

export class Dashboard extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <div className="dashboard">
        <p>will display info on users path progress</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
