import './Home.css'
import React from 'react'
import { navbar } from './nav'
import { Link } from 'react-router-dom'

const Navs = () => {
  return (
    <div>
       <nav className="nav-container">
        <ul className="navlist">
            {navbar.map((e)=>{
                return <li><Link to={e.url} className={e.navclass}>{e.title}</Link></li>
            })}
        </ul>
      </nav>
    </div>
  )
}

export default Navs
