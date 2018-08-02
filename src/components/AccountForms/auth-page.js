import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AuthNav from './auth-nav';
import LoginForm from './Login/login-form';
import RegisterForm from './Register/registration-form';
import './styles/auth-form.css';
import './styles/auth-page.css'

function AuthPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className='auth-container'>
      <div className='demo'>
        <p>quick demo account</p>
        <p>username: brownfox</p>
        <p>password: lazydog1</p>
      </div>
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

export default connect(mapStateToProps)(AuthPage);