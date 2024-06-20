
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

import Aboutpage from "./Pages/Aboutpage";
import { RefillStation } from "./Pages/RefillStation";
import { Sets } from "./Pages/Sets";
import { Shop } from "./Pages/Shop";
import Adminpannel from "./AdminPaanel/Adminpannel";

import { RefillStation } from "./RefillStation";
import { Sets } from "./Sets";
import Aboutpage from "./Aboutpage";
import './App.css'
import CardContainer from './ft32_181_components/CardContainer'


import SignupForm from './componets_m/SignupForm';
import LoginForm from './componets_m/LoginForm';
import Nav from './componets_m/Nav';
import ForgotPassword from './componets_m/ForgotPassword';
import { Route, Routes } from 'react-router';
// import VerifyEmailForm from './componets/VerifyEmailForm';
// import { Authprovider } from './context/loginauth';
// import { Link } from 'react-router-dom';
// import AdminPage from './componets/AdminPage';
// import AddCardForm from './componets/AddCardForm';
// import EditCard from './componets/EditCard';
// import Cardshow from './userpanel/Cartshow';
import Cartshow from './userpanel/Cartshow';
import ItemList from './componets_m/searchfunctionality';
import QRCode from 'qrcode.react';

const App = () => {


  const [count, setCount] = useState(0)
  return (
    <>
      
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
      <Routes>
        <Route path="/Detail/:productId" element={<Detail />} />
        <Route path="/" element={<Refil2 />} />
        <Route path="/image3" element={<Image3 />} />
      </Routes>
    

    <>
    
    <div>
      <CardContainer/>
    </div>
    <div style={{ display: "flex" }}>
        {/* <Aboutpage /> */}
        <RefillStation />
        {/* <Sets /> */}
        {/* <Shop/> */}
        {/* <Adminpannel/> */}
      </div>
    </>
    <div>
      {/* <h1>Hello</h1> */}
      <div>
        {/* <Nav /> */}
        <Routes>
          <Route path='/'element={<Nav/>}/>
          <Route path='/Nav' element={<Nav />} />
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path='/Cartshow' element={<Cartshow/>} />
          <Route path='/cartshow/Qrcode' element={<QRCode/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          {/* <Route path="/add-card" element={<AddCardForm />} />
          <Route path="/edit-card/:id" element={<EditCard />} /> */}
        </Routes>
        {/* <Cardshow /> */}
        {/* <ItemList/> */}
      </div>
    </div>

    </>

  );
};
export default App
