// src/components/CardContainer.js
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardContainer.css' // You can style your container using this CSS file

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('https://huawei-heroes-081-986o.onrender.com/Cards') // Replace with your API URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      console.log(data);
  }, []);
  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <div>
       <div className="card-container">
    {data.map((item, index) => (
      <Card key={index} data={item} />
    ))}
  </div>
  <div className="pagination">
  <button onClick={handleClickPrevious} disabled={currentPage === 1}>
    Previous
  </button>
  <span>Page {currentPage}</span>
  <button onClick={handleClickNext} disabled={endIndex >= data.length}>
    Next
  </button>
  </div>

    </div>
   
   
  );
};

export default CardContainer;
