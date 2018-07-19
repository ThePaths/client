import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './GuestHeader.css';

export class GuestHeader extends React.Component {

  render() {

    // if (this.props.loggedIn) {
    // redirect to UserHeader
    // }
    return (
      <header className='main-header guest-header'>
        <div className='form-redirect-container'>
          <Link to='/auth' className="form-redirect-btn">Login/Register</Link>
        </div>
        <div>
          <h1 className='site-logo'>The Paths</h1>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GuestHeader);
