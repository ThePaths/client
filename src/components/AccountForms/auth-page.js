import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AuthNav from './auth-nav'
import LoginForm from './Login/login-form'
import RegisterForm from './Register/registration-form'
import './auth-page.css'

export class AuthPage extends React.Component{
 
 render(){
  if (this.props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className='auth-container'>
      <AuthNav />
      <div className='auth-components'>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  )
}}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(AuthPage);