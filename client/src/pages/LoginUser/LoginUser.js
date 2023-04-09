import React from 'react'
import { SignInForm } from '../../components/signInForm/SignInForm.js';
import './LoginUser.css'
export default function LoginUser() {
  return (
    <div className='containerLoginPage'>
      <div className='formContainer'>
        <SignInForm/>
      </div>
    </div>
  )
}
