// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './admin.css';
import './AdminPage.module.css';
// import { Box, Button, Flex, Text, Wrap} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [totalcost,setTotal ]
//   const { formData, setFormData, setData,data } = useContext(Authcontext);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://huawei-heroes-081-5.onrender.com/Cards');
      setCards(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cards:', error);
      setError('Failed to fetch cards');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://huawei-heroes-081-5.onrender.com/Cards/${id}`);
      setCards(cards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
      setError('Failed to delete card');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Page</h1>
        <Link to="/add-card">Add New Card</Link>
      </div>
      <div className="card-list">
        {cards.map(card => (
          <div className="card-item" key={card.id}>
            <img src={card.image} alt={card.name} />
            <div className="card-details">
              <h3>{card.name}</h3>
              <p>{card.badge}</p>
              <p>{card.price}</p>
            </div>
            <div className="card-buttons">
              <button className="delete-button" onClick={() => handleDelete(card.name)}>Delete</button>
              <Link to={`/edit-card/${card.id}`} className="edit-button">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
