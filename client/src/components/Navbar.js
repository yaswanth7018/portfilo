// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/portfolioform">Add Portfolio</Link></li> {/* Link to add portfolio */}
        <li><Link to="/portfolioview">View Portfolio</Link></li> {/* Link to view portfolio */}
      </ul>
    </nav>
  );
};

export default Navbar;

