import React from 'react';
//import './auth-nav.css';
import './styles/accountForm.css';
export default function AuthNav(props) {

  function showForm(formId, buttonId) {
    let auth = document.getElementsByClassName('auth');
    for (let i = 0; i < auth.length; i++) {
      auth[i].style.display = 'none';
    }
    let buttons = document.getElementsByClassName('auth-button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = 'auth-button';
    }
    let form = document.getElementById(formId);
    form.style.display = 'block';
    let button = document.getElementById(buttonId);
    if (button.className === 'auth-button') {
      button.className += ' active';
    }
  }

  return (
    <nav className='auth-nav'>
      <button className='auth-button active' id='login-button' onClick={() => showForm('login-form', 'login-button')}>Login</button>
      <button className='auth-button' id='register-button' onClick={() => showForm('register-form', 'register-button')}>Register</button>
    </nav>
  );
}