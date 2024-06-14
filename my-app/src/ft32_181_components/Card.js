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
        <img src={isHovered && data['image 2'] ? data['image 2'] : data.image} alt={data['full-unstyled-link']} />
      </div>
      <h5>{data['full-unstyled-link']}</h5>
      <p>{data.badge}</p>
      <p>{data['rating-text']} {data['rating-count']}</p>
      <p>{data['price-item']}</p>
      <button>{data['quick-add__submit']}</button>
    </div>
  );
};

export default Card;
