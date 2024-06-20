import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ft30_067_componants/Dropdown.css';

const Dropdown2 = () => {
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
       Refill Station
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
             <h5 style={{marginLeft:"10px"}}>All Refills</h5>
          <li className="dropdown-item">
            <Link to="/Skin_Care_Refill" onClick={closeDropdown}>Skin Care Refill</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/Hand_Care_Refill" onClick={closeDropdown}>Hand Care Refill</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/Body_Care_Refill" onClick={closeDropdown}>Body Care Refill</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/Oral_Care_Refill" onClick={closeDropdown}>Oral Care Refill</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;
