// AdminPage.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import "./userpanel.css";
import { Authcontext } from '../context/loginauth';

const Cartshow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalcost,setTotalcost]=useState(0);
  
  // const { formData, setFormData,deleteFromCart} = useContext(Authcontext);

  useEffect(() => {
    fetchCards();
  }, []);
  const calculateTotalPrice = (data) => {

    const total = data.reduce((acc, card) => acc + (card.price || 0), 0);
    // console.log(total);
    setTotalcost(total.toFixed(2));
  };

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://huawei-heroes-081-1.onrender.com/Cards');
      setData(response.data);
      const fetchedCards = response.data.map(card => ({
        ...card,
        price: parseFloat(card.price.replace(',', '.')) 
      }));
      calculateTotalPrice(fetchedCards);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cards:', error);
      setError('Failed to fetch cards');
      setLoading(false);
    }
  };

  const handleDelete = async (productName) => {
    try {
      const response = await axios.get('https://huawei-heroes-081-1.onrender.com/Cards');
      const cardToDelete = response.data.find(card => card.name === productName);
      

      if (cardToDelete) {
        await axios.delete(`https://huawei-heroes-081-1.onrender.com/Cards/${cardToDelete.id}`);
        setData(data.filter(card => card.id !== cardToDelete.id));
      } else {
        alert('Card not found');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      setError('Failed to delete card');
    }
  };
  

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-container">
      <div><h1>{data.length}</h1></div>
      <div><h1>Total Cart Value: {totalcost}</h1></div>
      <div className="card-list">
        {data.map(card => (
          <div className="card-item" key={card.id}>
            <img src={card.image} alt={card.name} />
            <div className="card-details">
              <h4>{card.name}</h4>
              <p>{card.badge}</p>
              <p>{card.price}</p>
            </div>
            <div className="card-buttons">
              <button className="delete-button" onClick={() => handleDelete(card.name)}>Delete</button>
              {/* <Link to={`/edit-card/${card.id}`} className="edit-button">Edit</Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartshow;
