import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../../actions/auth';
import './UserHeader.css';
import {  Link } from 'react-router-dom';
export class UserHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    
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
          <Link to='./dashboard'>
            <button>Dashboard</button>
          </Link>
          {logOutButton}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser 
});

export default connect(mapStateToProps)(UserHeader);
