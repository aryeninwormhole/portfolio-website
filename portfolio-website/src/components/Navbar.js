// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Changed Link to NavLink
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">My Portfolio</NavLink> {/* Changed Link to NavLink */}
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li> {/* Added 'end' prop for exact matching on home */}
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
