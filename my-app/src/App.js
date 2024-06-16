import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import Detail from './components/Detail';
import Image from './components/Image';
import Image1 from './components/Image1';
import ProductGrid1 from './components/ProductGrid1';
import Refil from './components/Refil';
import Navbar from './components/Navbar';


const App = () => {
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
      
      </>
      } />
        <Route path="/Detail/:productId" element={<Detail />} />
      </Routes>
    </Router>
      </div>
    
  );
};

export default App;
