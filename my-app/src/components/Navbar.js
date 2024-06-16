// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav>
      <ul
      style={{
        display:"flex",
        justifyContent:"space-evenly",
        fontSize:"15px",
        listStyle:"none",
        fontFamily:"sans-serif",
      }}
      >
        <li><Link to="/">All Product</Link></li>
        <li><Link to="/Best-Seller">Best-Seller</Link></li>
        <li><Link to="/Shops">Shops</Link></li>
        <li><Link to="/Sets">Sets</Link></li>
        <li><Link to="/Refill-Station">Refill-Station</Link></li>
        <li><Link to="/About us">About us</Link></li>
        <li><Link to="/Custom order for event">Custom order for event</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
