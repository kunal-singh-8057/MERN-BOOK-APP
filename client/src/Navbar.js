import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const logout = ()=>{
    navigate("/")
  }
  return (
<>
<div className='nav'>
  <h1>Wizard Readings</h1>
  <div className='navlink'>
  <Link to='/home' className='navlinks'>Home</Link>
  <Link to='/viewBooks' className='navlinks'>ViewBooks</Link>
  <Link to='/about' className='navlinks'>About</Link>
  <Link to='/contact' className='navlinks'>Contact</Link>
  <Link to='/' className='log' onClick={logout}>Logout</Link>
  </div>
</div>
</>
  )
}

export default Navbar
