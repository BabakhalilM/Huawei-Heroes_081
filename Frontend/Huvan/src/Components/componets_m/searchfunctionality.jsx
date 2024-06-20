import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './admin.css';
// import './search.css';
const ItemList = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://huawei-heroes-081-5.onrender.com/Cards');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div class="search-container">
      <div class="search-input-wrapper">
        <input
          type="text"
          class="search-input"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}

        />
      </div>
      </div>

      <div className="card-list">
        {filteredItems.map(card => (
          <div className="card-item" key={card.id}>
            <img src={card.image} alt={card.name} />
            <div className="card-details">
              <h3>{card.name}</h3>
              <p>{card.badge}</p>
              <p>{card.price}</p>
            </div>
            <div className="card-buttons">
              {/* <button className="delete-button" onClick={() => handleDelete(card.name)}>Delete</button> */}
              {/* <Link to={`/edit-card/${card.id}`} className="edit-button">Edit</Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
