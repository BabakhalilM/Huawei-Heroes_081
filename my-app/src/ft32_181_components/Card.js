// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img src={isHovered && data['image'] ? data['image 2']||data['image'] : data.image} alt={data['name']} />
      </div>
      <h5>{data['name']}</h5>
      <p>{data.badge || "Pack Price"}</p>
      <p>{data['rating'] || "N/A"}★ {data['ratingcount']}</p>
      <p>{data['price']}€</p>
      <button>{data.submit || "Sold Out"}</button>
    </div>
  );
};

export default Card;