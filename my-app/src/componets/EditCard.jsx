// EditCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCard = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchCardData();
  }, []);

  const fetchCardData = async () => {
    try {
      const response = await axios.get(`https://huawei-heroes-081-2.onrender.com/Cards/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://huawei-heroes-081-2.onrender.com/Cards/${id}`, formData);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Card</h2>
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      {/* Add other fields similarly */}
      <button type="submit">Update Card</button>
    </form>
  );
};

export default EditCard;
