import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../../actions/auth';
import {clearAuthToken} from '../../../local-storage';

export class ClassroomHeader extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <header className="main-header classroom-header">
        <div>
          <Link to='/'>&lsaquo; Back</Link>
        </div>
        <div>
          <Link to='/'>
            <h1 className='site-logo'>The Paths</h1>
          </Link>
        </div>
        <div className='form-redirect-container'>
          <Link className="form-redirect-link" 
            onClick={ () => this.logOut() } to='/'>Sign Out</Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ClassroomHeader);
