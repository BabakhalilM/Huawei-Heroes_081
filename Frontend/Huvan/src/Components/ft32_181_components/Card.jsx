
import React, { useContext, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../context/loginauth';

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const {addToCart,useremail}=useContext(Authcontext);
  const navigate=useNavigate();

  const handleNavigate = () => {
    navigate(`/Detail/${data.id}`);
  };

  const handleAddToCart = () => {
    console.log(useremail,data.id);
    if (data.submit === "Add to cart") {
      addToCart(useremail, data.id)
        .then(() => {
          console.log('Product added to cart successfully!');
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error);
          
          alert('Error adding product to cart. Please try again later.');
        });
    } else {
      alert('This product is out of stock');
    }
  };
  return (
    <div
    
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img onClick={handleNavigate} src={isHovered && data['image'] ? data['image 2']||data['image'] : data.image} alt={data['name']} />
      </div>
      <h5>{data['name']}</h5>
      <p>{data.badge || "Pack Price"}</p>
      <p>{data['rating'] || "N/A"}★ {data['ratingcount']}</p>
      <p>{data['price']}€</p>
      <button onClick={handleAddToCart} >{data.submit || "Sold Out"}</button>
    </div>
  );
};

export default Card;