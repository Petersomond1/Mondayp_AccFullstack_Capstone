import React from 'react'
import "./css/Login.css"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  return (

<div className='login'>  
<Link to="/">
  <img className="login_logo" src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20login%20logopng.png?updatedAt=1695417141012" alt="" />
  </Link>
<div className='login_container'>
<h1>Sign-in</h1>
<form onSubmit={handleSubmit(submitHandler)}>
<h4 htmlFor="email"> Email or mobile phone number</h4> 
<input type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus/> 
            {errors.email && (
  <div className="text-red-500 ">{errors.email.message}</div>
)}
<h4 htmlFor="password">Password</h4>
<input type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus/>
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
<div className='signinbutton_grid'>
<button type='submit' className='login-_signinButton'>Login</button>
<Link to="/forgotpassword"><button className='forgotpxwButton'>Forgot Password?</button></Link>
</div>
<p>
By continuing, you agree to Amazon's Conditions of Use   and Privacy Notice.
</p>
<p>No Account?</p>
<Link to="/Register">
<button className="login_registration"> Create Your Amazon Account</button>
</Link>
</form>
</div>
</div>

  )
}

export default Login;