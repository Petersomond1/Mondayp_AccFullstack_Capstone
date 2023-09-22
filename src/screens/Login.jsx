import React from 'react'
import "./css/Login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
  
<div className='login'>  

  <img className="login_logo" src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20login%20logopng.png?updatedAt=1695417141012" alt="" />

<div className='login_container'>
<h1>Sign-in</h1>
<form>
<h5>Email or mobile phone number</h5> 
<input type='text' />
<h5>Password</h5>
<input type='password' />

<button type='submit' className='login-_signinButton'>Sign In</button>
<p>
By continuing, you agree to Amazon's Conditions of Use, Sale and Privacy Notice.
</p>
<button className="login_registration"> Create your Amazon </button>
</form>
</div>
</div>

  )
}

export default Login;