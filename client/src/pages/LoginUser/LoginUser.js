import React from 'react'
import { LoginForm } from '../../components/loginForm/LoginForm.js';
import './LoginUser.css'
export default function LoginUser() {
  return (
    <div className='containerLoginPage'>
      <div className='formContainer'>
        <LoginForm/>
      </div>
    </div>
  )
}
