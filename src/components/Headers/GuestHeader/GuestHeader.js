import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import './GuestHeader.css'

export class GuestHeader extends React.Component {

  render() {

    // if (this.props.loggedIn) {
    // redirect to UserHeader
    // }
    return (
      <header className='guest-header'>
          <h1 className='site-name'>The Paths</h1>
          <div className='guest-link'><Link to='/auth'>Login/Register</Link></div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GuestHeader);
