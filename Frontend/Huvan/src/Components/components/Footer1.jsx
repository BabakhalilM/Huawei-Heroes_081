
import React from 'react';
import './Footer1.css'; 

const Footer1 = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
      
        <div className="footer-section">
          <h2>HAAN</h2>
          <p>
            A natural personal care brand that focuses its <br/>
            activity on defining a better future for the <br/>
            planet and humanity.
          </p>
        </div>
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <a href="#">Newsletter</a>
          <a href="#">Purpose</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Custom Orders for Events</a>
        </div>
        <div className="footer-section">
          <h3>Policies</h3>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Deliveries & Returns</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Legal Notice</a>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Email: haanready@gmail.com</p>
          <p>Follow Us:</p>
          <div className="social-media">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="YouTube">▶️ YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
