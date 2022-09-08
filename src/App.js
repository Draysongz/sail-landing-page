import React from 'react'
import Home from './Components/LMS/Home/Home'
import Navs from './Components/LMS/Home/Navs'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './Components/LMS/Login/Signin'
import Tutor from './Components/LMS/Login/Tutor'
import About from './Components/LMS/About/About';
import SignUp from './Components/LMS/Login/Signup';
function App () {
  return (
    
    <Router>
      <Navs/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/tutor' element={<Tutor/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<SignUp/>}/>

      </Routes>
    </Router>
  
  )
}

export default App
