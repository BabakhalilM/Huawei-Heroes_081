// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "15px",
          listStyle: "none",
          fontFamily: "sans-serif",
        }}
      >
        <li>
          <Link to="/" className="custom-link">All Product</Link>
        </li>
        <li>
          <Link to="/Best-Seller" className="custom-link">Best-Seller</Link>
        </li>
        <li>
          <Link to="/Shops" className="custom-link">Shops</Link>
        </li>
        <li>
          <Link to="/Sets" className="custom-link">Sets</Link>
        </li>
        <li>
          <Link to="/Refill-Station" className="custom-link">Refill-Station</Link>
        </li>
        <li>
          <Link to="/About us" className="custom-link">About us</Link>
        </li>
        <li>
          <Link to="/Custom order for event" className="custom-link">Custom order for event</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
