import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar">
        <div className='navLeftSide'>NT.com</div>
        <div className="navRightSide">
            <NavLink to="my-react-app/">Home</NavLink>
            <NavLink to="my-react-app/about">About</NavLink>
            <NavLink to="my-react-app/portfolio">Portfolio</NavLink>
            <NavLink to="my-react-app/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar