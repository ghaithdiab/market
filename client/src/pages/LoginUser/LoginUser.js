import React from 'react'
import { LoginForm } from '../../components/loginForm/LoginForm.js';
import { SignInForm } from '../../components/signInForm/SignInForm.js';
import './LoginUser.css'
export default function LoginUser() {
  return (
    <div className='containerLoginPage'>
      <div className='formContainer'>
        <SignInForm/>
        {/* <LoginForm/> */}
      </div>
    </div>
  )
}
