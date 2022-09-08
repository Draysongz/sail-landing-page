import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] =useState({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
  })
  const {email, password} =formData

const navigate= useNavigate()

const onChange = (e)=>{

  setFormData( (prevState)=> ({
    
    ...prevState,
    email:e.currentTarget.value,
    password: e.currentTarget.value,
    
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

        <div className="signInBar">
          <p className="signInText">
            Sign In
          </p>
          <button className="signInButton">

          </button>
        </div>
      </form>
      {/* Google Oauth */}

      <Link to='/register' className='registerLink'>
        Sign Up
      </Link>
    </main>
  </div>

  </>
  )
}

export default Signin


