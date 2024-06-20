import React, { useState } from "react";

const Card = ({ image, image2, title, rating, price, buttonText }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    setCurrentImage(image2 || image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <img src={currentImage} alt={title} className="card-img" />
        <h3
          style={{ fontWeight: "normal", fontFamily: "cursive" }}
          className="card-title"
        >
          {title}
        </h3>
        {rating && <p className="card-rating">Rating:{rating}</p>}
        <p className="card-price">${price}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export const Sunscreen = () => {
  const products = [
    {
      "image": "https://haanready.com/cdn/shop/products/062_736773a1-2164-4170-9ef2-925154e35d00.jpg?v=1651509382&width=533",
      "image2": "https://haanready.com/cdn/shop/products/Haan_12.jpg?v=1681719111&width=533",
      "title": "Hand Sanitizer - Daily Moods 5 Pack",
      "badge": "Pack Price",
      "rating": "5.0",
      "price": "26.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/076.jpg?v=1676293211&width=533",
      "image2": "",
      "title": "Hand Sanitizer - Daily Moods 3 Pack",
      "badge": "Pack Price",
      "rating": "4.7",
      "secondaryRating": "Not Rated",
      "price": "15.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/077.jpg?v=1651509539&width=533",
      "image2": "",
      "title": "Hand Sanitizer - Daily Moods 3 Pack",
      "badge": "Pack Price",
      "rating": "5.0",
      "secondaryRating": "Not Rated",
      "price": "15.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/075.jpg?v=1651509546&width=533",
      "image2": "https://haanready.com/cdn/shop/products/0001__CS_7855_78551338.jpg?v=1681718440&width=533",
      "title": "Hand Sanitizer - Daily Moods 3 Pack",
      "badge": "Pack Price",
      "rating": "4.8",
      "price": "15.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/files/Body_Mist_Familia_grey.jpg?v=1709064235&width=533",
      "image2": "https://haanready.com/cdn/shop/files/Body_Mist_Product_Lotus_front_grey_c75da5bd-8c84-4f71-bfe5-cee95211948a.jpg?v=1709064234&width=533",
      "title": "Pack 3 Mist Face & Body",
      "badge": "Sold out",
      "rating": "4.5",
      "price": "29.90",
      "buttonText": "Sold out"
    },
    {
      "image": "https://haanready.com/cdn/shop/files/Travel_bottle_SPF30_grey.jpg?v=1693476693&width=533",
      "image2": "https://haanready.com/cdn/shop/files/0003_HAAN-2.jpg?v=1693476693&width=533",
      "title": "Sunscreen SPF 35",
      "badge": "Sold out",
      "rating": "5.0",
      "secondaryRating": "3.0",
      "price": "19.90",
      "buttonText": "Sold out"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/HAAN_MAYO2021_PRODUCT1988.jpg?v=1677596177&width=533",
      "image2": "https://haanready.com/cdn/shop/products/HC4593P_Amz4.jpg?v=1677596177&width=533",
      "title": "Rich Hand Cream Pack",
      "badge": "Pack Price",
      "rating": "5.0",
      "price": "20.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/FICHAPDO_2.png?v=1654776220&width=533",
      "image2": "",
      "title": "Hand Sanitizer - Daily Moods 3 Pack",
      "badge": "Pack Price",
      "rating": "5.0",
      "price": "15.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/050.jpg?v=1651510180&width=533",
      "image2": "https://haanready.com/cdn/shop/products/HAAN_MAYO2021_PRODUCT1518_v2.jpg?v=1678811997&width=533",
      "title": "Hand Sanitizer & Lanyard Pack - Healing Chrysants",
      "badge": "Pack Price",
      "rating": "5.0",
      "price": "8.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/079.jpg?v=1651509828&width=533",
      "image2": "",
      "title": "Hand Sanitizer - Shake it Up 3 Pack",
      "badge": "Sold out",
      "rating": "5.0",
      "price": "15.90",
      "buttonText": "Sold out"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/BW_03copia.jpg?v=1651511095&width=533",
      "image2": "https://haanready.com/cdn/shop/products/BW_38.jpg?v=1715857220&width=533",
      "title": "Body Wash Purifying Verbena 3",
      "badge": "",
      "rating": "4.8",
      "price": "11.90",
      "buttonText": "Add to cart"
    },
    {
      "image": "https://haanready.com/cdn/shop/products/HAAN_JULIO20224856.jpg?v=1651510494&width=533",
      "image2": "https://haanready.com/cdn/shop/products/HAAN_JULIO20224714.jpg?v=1651510497&width=533",
      "title": "Hand Cleansing Pack - Sunset Fleur",
      "badge": "Pack Price",
      "rating": "5.0",
      "price": "15.90",
      "buttonText": "Add to cart"
    }
  ];
  

  return (
    <>
      <div className="firstimg">
        <img
          className="fimg"
          style={{ height: "60vh" }}
          src="https://haanready.com/cdn/shop/collections/SunCare.jpg?v=1711041008&width=1920"
          alt=""
        />
        <p
          style={{
            marginTop: "-230px",
            marginLeft: "100px",
            color: "white",
            fontSize: "2.5rem",
          }}
        >Sun Screen
        </p>
      </div>
      <div className="app" style={{ marginTop: "230px" }}>
        <div className="card-container">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};
