import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navLeftSide'>
        <NavLink to="/">NT.com</NavLink>
        </div>
        <div className="navRightSide">            
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Packages</NavLink>
            <NavLink to="/Blogs">Blogs</NavLink>
            <NavLink to="/Emails">Emails</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar