// src/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import './styles.css'; // Import the CSS file
import { Authcontext } from '../context/loginauth';
// import './navbar.css';
import "./Navbar.module.css";
// import '../logo.jpg';
import logoImage from '../components/logo.jpg';

const Navbar = () => {

  const navigate = useNavigate();

  const { useremail, setFormData, setUseremail } = useContext(Authcontext);

  const handleLogout = () => {
    setFormData({
      name: "",
      password: "",
      email: "",
      fruit: "",
      cart: []
    });
    setUseremail("");
    navigate("/");

  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };
  return (
    <nav style={{marginBottom:"10px"}}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: '25px',
          listStyle: 'none',
          fontFamily: 'sans-serif',
          alignItems: 'center'
        }}
      >
        <li><img style={{width:"150px",margin:"0px"}} src={logoImage} alt="" /></li>
        
        <li style={{ flexGrow: 1, textAlign: 'center' }}>
          <h1 style={{fontFamily:"cursive"}} ><span style={{color:"blue"}}>Shi</span><span style={{color:"greenyellow"}}>ne </span> <span style={{color:"coral"}}>Haven</span><span ></span> </h1>
        </li>
        {useremail === 'babakhalil@gmail.com' && (
          <li >
            <Link to='/Adminpannel'> <span style={{fontSize:"30px"}} class="material-symbols-outlined"> shield_person </span></Link>
          </li>
        )}
        {useremail && (
          <li>
            <Link to="/cartshow">
              <span style={{ fontSize: '30px' }} className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </li>
        )}
{useremail ? (
          <li>
            <button className='btn' onClick={handleLogout}>
              <span className="material-symbols-outlined">person</span>
              <span className="material-symbols-outlined">logout</span>
            </button>
          </li>
        ) : (
          <li>
            <button style={{ border: "1px solid", background: "white", fontSize: "1rem" }} className='btn'>
              <Link to="/loginForm">
                <span className="material-symbols-outlined">person</span>
                <span className="material-symbols-outlined">login</span>
              </Link>
            </button>
          </li>
        )}


      </ul>




      <ul style={{
        display: "flex",
        justifyContent: "space-evenly",
        fontSize: "25px",
        listStyle: "none",
        fontFamily: "sans-serif",
      }}><li>

          <Link to="/CardContainer" style={{ fontSize: "20px" }} className="custom-link">All Product</Link>
        </li>
        <li>
          <Link to="/Productlist" style={{ fontSize: "20px" }} className="custom-link">Best-Seller</Link>
        </li>
        <li>
          {/* <Link to="/Shops" className="custom-link">Shops</Link> */}
          <select style={{ border: "none", fontSize: "20px" }} onChange={handleSelectChange} defaultValue="" className="dropdown">
            <option value="" disabled>
              Shops
            </option>
            <option value="/Travel_Sets">Travel Sets</option>
            <option value="/Gift_Sets">Gift Sets</option>
          </select>
        </li>
        <li>
          {/* <Link to="/Sets" className="custom-link">Sets</Link>
           */}
          <div className="custom-dropdown dropdown">
            <select style={{border:"none",fontSize:"20px" }}  onChange={handleSelectChange} defaultValue="">
              <option style={{fontSize: "20px"}} value="" disabled>
                Set
              </option>
              <optgroup label="Hand Care">
                <option value="/Hand_Sanitizer">Hand Sanitizer</option>
                <option value="/Hand_Cream">Hand Cream</option>
                <option value="/Hand_Soap">Hand Soap</option>
                <option value="/Packs_Hand_Care">Packs Hand Care</option>
              </optgroup>
              <optgroup label="Body Care">
                <option value="/Body_Lotion">Body Lotion</option>
                <option value="/Body_Oil">Body Oil</option>
                <option value="/Body_Wash">Body Wash</option>
                <option value="/Body_Scrub">Body Scrub</option>
              </optgroup>
              <optgroup label="Face Care">
                <option value="/Face_Serum">Face Serum</option>
                <option value="/Face_Cleanser">Face Cleanser</option>
                <option value="/Face_Cream">Face Cream</option>
                <option value="/Packs_Skin_Care">Packs Skin Care</option>
                <option value="/Sunscreen">Sunscreen</option>
                <option value="/Hotel_Amenities">Hotel Amenities</option>
              </optgroup>
            </select>
          </div>

        </li>
        <li>
          {/* <Link to="/about" className="custom-link">Refill-Station</Link> */}

          <select style={{ border: "none", fontSize: "20px" }} onChange={handleSelectChange} defaultValue="" className="dropdown">
            <option value="" disabled>
              Refill Sataion
            </option>
            <option value="/Skin_Care_Refill">Skin Care Refill</option>
            <option value="/Hand_Care_Refill">Hand Care Refill</option>
            <option value="/Body_Care_Refill">Body care Refill</option>
            <option value="/Oral_Care_Refill">OralCareRefill </option>
          </select>
        </li>
        <li>
          <select style={{ border: "none", fontSize: "20px" }} onChange={handleSelectChange} defaultValue="" className="dropdown">
            <option value="" disabled>
              About Us
            </option>
            <option value="/our-story">Our Stores</option>
            <option value="/sobremesatalks">Sobremesa Talks</option>
            <option value="/water-projects">Water Projects</option>
          </select>
        </li>
        <li>


        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
