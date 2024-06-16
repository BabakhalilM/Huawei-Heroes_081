
import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';
import { useNavigate } from 'react-router-dom';

const AddCardForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    'image 2': '',
    'full-unstyled-link': '',
    dontuse: '',
    badge: '',
    'rating-text': '',
    'rating-count': '',
    'visually-hidden': '',
    'price-item': '',
    'price-item 2': '',
    'price-item 3': '',
    'price-item 4': '',
    'quick-add__submit': ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = { ...formData, id_: Date.now().toString() };
    try {
      await axios.post('https://huawei-heroes-081-5.onrender.com/Cards', newCard);
      navigate('/admin');
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Card</h2>
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <label htmlFor='productname'>Product Name</label>
      <input type="text" id='productname'/>
      <label htmlFor='price'>Price</label>
      <input type="number" id="price" />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;
