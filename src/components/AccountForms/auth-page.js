import React from 'react';

import AuthNav from './auth-nav'
import LoginForm from './Login/login-form'
import RegisterForm from './Register/registration-form'
import './auth-page.css'

export default function AuthPage(props) {
  return (
    <div className='auth-container'>
      <AuthNav />
      <div className='auth-components'>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  )
}