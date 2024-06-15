// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  
//   const { formData, setFormData, setData,data } = useContext(Authcontext);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://huawei-heroes-081-1.onrender.com/Cards');
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
      await axios.delete(`https://huawei-heroes-081-1.onrender.com/Cards/${id}`);
      setCards(cards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
      setError('Failed to delete card');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Admin Page</h1>
      <Link to="/add-card">Add New Card</Link>
      <div>
        {cards.map((card,index) => (
          <div key={index}>
            <p>{card.id}</p>
            <h3>{card["full-unstyled-link"]}</h3>
            <p>{card.badge}</p>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
            <Link to={`/edit-card/${card.full-unstyled-link}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
