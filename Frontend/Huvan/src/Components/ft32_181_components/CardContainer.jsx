
import React, { useEffect, useState } from 'react';
import Card from './Card';
// import './CardContainer.css';
import './CardContainer.css';

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [SearchText,setSearchText] = useState("");
  const [ErrorMessage,setErrorMessage] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('https://huawei-heroes-081-5.onrender.com/Cards') 
      .then(response => response.json())
      .then(data => {setData(data);
        setFilteredData(data);
  })
      .catch(error => console.error('Error fetching data:', error));
      console.log(data);
  }, []);
  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleAll = () =>{
    setFilteredData(data);
  }
  const handleTopRated = () =>{
    setFilteredData(data.filter((res)=>res?.rating>4.5))
  }

  const handleLowRated = () =>{
    setFilteredData(data.filter((res)=>res?.rating<3.0))
  }

  const handleRange1000to1200 = () =>{
     const filterPrice = data.filter((res)=>{ 
        const price = res?.price.replace(/,/g, '');
        console.log(price);
    if(price>=1000 && price<=1200)
    {
        return price;
    }
  });
  setFilteredData(filterPrice);
  }

  const handleRangelessThan1000 = () =>{
    const filterPrice = data.filter((res)=>{
      const price = res?.price.replace(/,/g, '');
        if(price<1000)
        return price;
    });
    setFilteredData(filterPrice);
  }

  const handleRangeMoreThan1500 = () =>{
    const filterPrice = data.filter((res)=>{
      const price = res?.price.replace(/,/g, '');
        if(price>1500)
        return price;
    });
    setFilteredData(filterPrice);
  }

  const handleSearch = () =>{
    if(SearchText!=='')
    {
        const filterData = data.filter((res)=>res?.name?.toLowerCase()?.includes(SearchText.toLowerCase()));
        setFilteredData(filterData);

        setErrorMessage('');
        if(filterData?.length===0)
        {
          setErrorMessage(`Sorry, we coudn't find any results for "${SearchText}"`);
        }
    }
    else{
        setErrorMessage("");
        setFilteredData(filteredData);
    }
  }


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  return (
    <div>
     
          <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-start">
          <button className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-1"
            onClick={handleAll}>
           All
            </button>
            <button className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-1"
            onClick={handleTopRated}>
            Ratings 4.5+
            </button>
            <button
            className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-2"
            onClick={handleLowRated}>
            Ratings 1 - 3
            </button>
            <button
            className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-2"
            onClick={handleRange1000to1200}>
            1000 - 1200
            </button>
            <button
            className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-2"
            onClick={handleRangelessThan1000}>
            Less than ₹1000
            </button>
            <button
            className="filterBtn text-sm md:text-[15px] hover:ring-2 hover:ring-gray-200 hover:ring-offset-2"
            onClick={handleRangeMoreThan1500}>
            More than ₹1500
            </button>
            <div>
            <input type="text" 
            onChange = {(e)=>setSearchText(e.target.value)}
            value = {SearchText}
            onKeyUp={handleSearch}
            placeholder="Search..."
            className="filterBtn text-sm md:text-[15px] searchInput focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"/>
           </div>
        </div>   
       
        {ErrorMessage && (<div className="mt-5 mb-3 text-2xl center font-ProximaNovaBlack">{ErrorMessage}</div>)}


       <div className="card-container">
    {currentData.map((item, index) => (
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