import React from 'react'
import './Home.css'
import { navbar } from './nav'
import vector from '../Utilities/vector.png'
import vector1 from '../Utilities/vector1.png'
import Vector2 from '../Utilities/Vector2.png'
import Group from '../Utilities/Group.png'

const Home = () => {
  return (
    <div>
      <nav className="nav-container">
        <ul className="navlist">
            {navbar.map((e)=>{
                return <li><a href={e.url} className={e.navclass}>{e.title}</a></li>
            })}
        </ul>
      </nav>
      <div className="hero">
        <div className="left">
        <h2 className='main-header'>Online <br /> Education</h2>
        <p className="hero-text">Online learning gives educators an opportunity
        to reach students who may be able <br />to enrol in a traditional classroom course and supports 
        students who need to work on <br /> 
        their own schedule and at their own pace</p>
        <button className='startbtn' type='button'>Start Now</button>
        </div>
            <img src={vector} alt="vectore" className="vector" />
            <img src={vector1} alt="vectore" className="vector1" />
            <img src={Vector2} alt="vectore" className="vector2" />
            <img src={Group} alt="vectore" className="group" />
            
      </div>
    </div>
  )
}

export default Home
