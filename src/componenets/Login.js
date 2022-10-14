import React from 'react'
import GoogleButton from 'react-google-button'
import { signInWithGoogle } from '../firebase'

const Login = () => {
  return (
    <div className='login'>
    <GoogleButton className='google' onClick={signInWithGoogle}/>
    </div>
  )
}

export default Login