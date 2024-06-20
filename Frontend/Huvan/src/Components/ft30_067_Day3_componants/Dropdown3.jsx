import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ft30_067_componants/Dropdown.css';

const Dropdown3 = () => {
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
       Sets
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
             <h5 style={{marginLeft:"10px"}}>All Refills</h5>
          <li className="dropdown-item">
            <Link to="/Travel_Sets" onClick={closeDropdown}>Travel Sets</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/Gift_Sets" onClick={closeDropdown}>Gift Sets</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown3;
