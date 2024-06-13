import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        About Us
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <Link to="/our-story" onClick={closeDropdown}>Our Story</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/sobremesatalks" onClick={closeDropdown}>Sobremesatalks</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/water-projects" onClick={closeDropdown}>Water Projects</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
