import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from '../../AccountForms/Login/login-form';
import RegisterForm from '../../AccountForms/Register/registration-form'
import AuthNav from './auth-nav'
import './landing-page.css'

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Welcome to Foo App</h2>
      <AuthNav />
      <div className='auth-components'>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
