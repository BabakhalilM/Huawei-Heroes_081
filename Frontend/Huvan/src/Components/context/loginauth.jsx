import React, { createContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
// Create the context
export const Authcontext = createContext();

// Create the provider component
export const Authprovider = ({ children }) => {
  const [qshow, setQshow] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    password: '',
    email:"",
    fruit: '',
    cart:[]
  });
  const [useremail,setUseremail]=useState("");

  const [data, setData] = useState([]);

  const addToCart = async (userEmail, productId) => {
    try {
      const response = await axios.get(`https://huawei-heroes-081-5.onrender.com/data?email=${(userEmail)}`);
  
      if (response.data.length === 0) {
        throw new Error('User not found');
      }
  
      const user = response.data[0];
  
      const productResponse = await axios.get(`https://huawei-heroes-081-5.onrender.com/Cards/${productId}`);
  
      const product = productResponse.data;
      if (!product) {
        throw new Error('Product not found');
      }
  
      const updatedCart = user.cart ? [...user.cart, product] : [product];
      const updatedUser = { ...user, cart: updatedCart };
  
      await axios.put(`https://huawei-heroes-081-5.onrender.com/data/${user.id}`, updatedUser);
  
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      if (error.message === 'User not found') {
        alert('User not found. Please check your email and try again.');
      } else {
        alert('Error adding product to cart. Please try again later.');
      }
    }
  };
    
    
const deleteFromCart = async (userEmail, productId) => {
  try {
    const userResponse = await axios.get(`https://huawei-heroes-081-5.onrender.com/data?email=${userEmail}`);
    const user = userResponse.data[0];

    if (!user) {
      throw new Error('User not found');
    }
    const updatedCart = user.cart.filter(item => item.id !== productId);
    const updatedUser = { ...user, cart: updatedCart };

    await axios.put(`https://huawei-heroes-081-5.onrender.com/data/${user.id_}`, updatedUser);

    console.log('Product removed from cart successfully!');
  } catch (error) {
    console.error('Error removing product from cart:', error);
  }
};



  return (
    <Authcontext.Provider value={{ setUseremail, qshow,useremail, setQshow, formData, setFormData, data, setData, addToCart, deleteFromCart  }}>
      {children}
    </Authcontext.Provider>
  );
};



// <button  onClick={() => handleAddToCart(card.id)}>Add to Cart</button>
// <button  onClick={() => handleDeleteFromCart(card.id)}>Remove from Cart</button>
// <button  onClick={() => handleDelete(card.name)}>Delete</button>

// const handleAddToCart = async (productId) => {
//   try {
//     await addToCart(userEmail, productId);
//     alert('Product added to cart successfully!');
//   } catch (error) {
//     console.error('Error adding product to cart:', error);
//     alert('Failed to add product to cart');
//   }
// };

// const handleDeleteFromCart = async (productId) => {
//   try {
//     await deleteFromCart(userEmail, productId);
//     alert('Product removed from cart successfully!');
//   } catch (error) {
//     console.error('Error removing product from cart:', error);
//     alert('Failed to remove product from cart');
//   }
// };
