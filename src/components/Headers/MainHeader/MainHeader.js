import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './MainHeader.css';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';

export class MainHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {

    let url = document.location.href;
    let linkText = '';
    let linkTo = '';
    let navClassList = 'site-nav';

    if (url === 'http://localhost:3000/' || url === 'http://localhost:3000/auth') {
      linkText = 'Login/Register';
      navClassList += ' hide';
    } else {
      navClassList = 'site-nav';
    }

    if (this.props.loggedIn) {
      linkText = 'Sign Out';
      linkTo = '/';
    } else {
      linkText = 'Login/Register';
      linkTo = '/auth';
    }

    return (
      <header className='main-header guest-header'>
        <div>
          <Link to='/'>
            <h1 className='site-logo'>The Paths</h1>
          </Link>
        </div>
        <div>
          <nav className={navClassList}>
            <ul>
              <li>
                <Link to='/dashboard/explore'>Explore</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='form-redirect-container'>
          <Link className="form-redirect-link" onClick={() => this.logOut()} to={linkTo}>{linkText}</Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainHeader);
