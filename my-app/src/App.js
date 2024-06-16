
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import Detail from './components/Detail';
import Image from './components/Image';
import Image1 from './components/Image1';
import ProductGrid1 from './components/ProductGrid1';
import Refil from './components/Refil';
import Navbar from './components/Navbar';
import Refil2 from './components/Refil2';
import Image3 from './components/Image3';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';

import { useState } from 'react'

import React from "react";
import { RefillStation } from "./RefillStation";
import { Sets } from "./Sets";
import Aboutpage from "./Aboutpage";
import './App.css'
import CardContainer from './ft32_181_components/CardContainer'



const App = () => {
  
  const [count, setCount] = useState(0)
  return (
      <div>
      
         <Router>
      <Routes>
      <Route path="/" element={
       <>
       <Navbar/>
      <Image />
      <ProductGrid />
      <Image1/>
      <ProductGrid1/>
      <Refil/>
      <Refil2/>
      <Footer/>
      <Footer1/>
      
      </>
      } />
        <Route path="/Detail/:productId" element={<Detail />} />
        <Route path="/" element={<Refil2 />} />
        <Route path="/image3" element={<Image3 />} />
      </Routes>
    </Router>
      </div>


    <>
    <div>
      <CardContainer/>
    </div>
    <div style={{ display: "flex" }}>
        {/* <Aboutpage /> */}
        {/* <RefillStation /> */}
        <Sets />
      </div>
    </>
    
  );
};
export default App
