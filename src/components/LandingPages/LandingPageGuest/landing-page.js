import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import GuestHeader from '../../Headers/GuestHeader/GuestHeader'
import MultiplePathDisplay from '../../MultiplePathDisplay/MultiplePathDisplay'
import './landing-page.css'

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <GuestHeader />
      <div className='guest-container'>
        <h2>Welcome to DevOps2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nostrum assumenda et aperiam, ex magnam, perspiciatis delectus fugit exercitationem aliquid quia in maxime pariatur! Omnis at rem, optio reiciendis suscipit vitae aut soluta vel praesentium ullam dolores nam voluptas, quisquam quas? Porro magni temporibus iure aspernatur? Vel explicabo obcaecati quidem?</p>
        <p>Check out some of our Paths below</p>
      </div>
      <MultiplePathDisplay />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
