import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ft30_067_componants/Dropdown.css';

const Dropdown4 = () => {
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
        Shop
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <>
        <div className="dropdown-list"  style={{display:'flex',flexDirection:"row",width:"500px",height:"230px"}}>
          <div className="f">
            <h5>Hand Care</h5>
            <ul className="dropdown-section">
              <li className="dropdown-item">
                <Link to="/Hand_Sanitizer" onClick={closeDropdown}>Hand Sanitizer</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Hand_Cream" onClick={closeDropdown}>Hand Cream</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Hand_Soap" onClick={closeDropdown}>Hand Soap</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Packs_Hand_Care" onClick={closeDropdown}>Packs Hand Care</Link>
              </li>
            </ul>
          </div>
          <div className="s">
            <h5>Body Care</h5>
            <ul className="dropdown-section body-care-section">
              <li className="dropdown-item">
                <Link to="/Body_Lotion" onClick={closeDropdown}>Body Lotion</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Body_Oil" onClick={closeDropdown}>Body Oil</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Body_Wash" onClick={closeDropdown}>Body Wash</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Body_Scrub" onClick={closeDropdown}>Body Scrub</Link>
              </li>
            </ul>
          </div>
          <div className="t">
            <h5>Skin Care</h5>
            <ul className="dropdown-section skin-care-section">
              <li className="dropdown-item">
                <Link to="/Face_Serum" onClick={closeDropdown}>Face Serum</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Face_Cleanser" onClick={closeDropdown}>Face Cleanser</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Face_Cream" onClick={closeDropdown}>Face Cream</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Packs_Skin_Care" onClick={closeDropdown}>Packs Skin Care</Link>
              </li>
            </ul>
          </div>
          <div className="u">
            <h5>Sun Care</h5>
            <ul className="dropdown-section sun-care-section">
              <li className="dropdown-item">
                <Link to="/Sunscreen" onClick={closeDropdown}>Sunscreen</Link>
              </li>
            </ul>
          </div>
        </div>
        </>

      )}
    </div>
  );
};

export default Dropdown4;
