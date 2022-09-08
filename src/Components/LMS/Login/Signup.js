import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] =useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const { firstname, lastname, email, password} =formData

const navigate= useNavigate()

const onChange = (e)=>{

  setFormData( (prevState)=> ({
    
    ...prevState,
    email:e.currentTarget.value,
    password: e.currentTarget.value,
    firstname: e.currentTarget.value,
    lastname:e.currentTarget.value,
  }))
}
  return (
  <>
  <div className="pageContainer">
    <header>
      <p className="pageHeader">
        Welcome Back!
      </p>
    </header>
    <main>
      <form action="">
      <input type="text" className="firstname" 
        placeholder='firstname' id='firstname' value={firstname} onChange={onChange} />

        <div className="passwordInput">
        <input type="text" className="lastname" 
        placeholder='lastname' id='lastname' value={lastname} onChange={onChange} />
        </div>
        <input type="email" className="email" 
        placeholder='email' id='email' value={email} onChange={onChange} />

        <div className="passwordInput">
          <input type={showPassword? 'text' : 'password'} className='passwordInput'
          placeholder='password' id='password' value={password} onChange={onChange} />
          <img src="e" alt="showPassword" className="showPassword"
           onClick={()=>setShowPassword((prevState)=> !prevState)} />
        </div>
        <Link to='/forgot-password' className='forgotPasswordLink'>
          Forgot Password
        </Link>

        <div className="signUpBar">
          <p className="signUpText">
            Sign Up
          </p>
          <button className="signUpButton">

          </button>
        </div>
      </form>
      {/* Google Oauth */}

      <Link to='/login' className='signInLink'>
        Sign In
      </Link>
    </main>
  </div>

  </>
  )
}

export default SignUp


