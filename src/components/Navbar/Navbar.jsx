import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='line'></div>
      <ul>
      <Link to='/projects'><li>.Projects()</li></Link>
      <Link to='skills'><li>.Skills()</li></Link>
      <Link to='/contact'><li>.Contact()</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
