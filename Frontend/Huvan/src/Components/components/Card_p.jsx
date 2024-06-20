
import { useNavigate } from "react-router-dom";
import "../ft32_181_components/Card.css";
import { useContext, useState } from "react";
import { Authcontext } from "../context/loginauth";

const Card = ({ product }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/Detail/${product.id}`);
  };


  
  const {addToCart,useremail}=useContext(Authcontext);
  

  const handleAddToCart = () => {
    console.log(useremail,product.id);
    if (product.submit === "Add to cart") {
      addToCart(useremail, product.id)
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
        <img onClick={handleNavigate} src={isHovered && product['image'] ? product['image 2']||product['image'] : product.image} alt={product['name']} />
      </div>
      <h5>{product['name']}</h5>
      <p>{product.badge || "Pack Price"}</p>
      <p>{product['rating'] || "N/A"}★ {product['ratingcount']}</p>
      <p>{product['price']}€</p>
      <button onClick={handleAddToCart}>{product.submit || "Sold Out"}</button>
    </div>
  );
};

export default Card;
