import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';

export class UserHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }
    return (
      <header className='main-header user-header'>
        <div>
          <h1 className="site-logo">The Paths</h1>
        </div>
        <div>
          <button>
            <img src="" alt="User avatar, display settings."/>
          </button>
          {logOutButton}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserHeader);
