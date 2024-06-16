// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
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


function App() {
  return (
    // <Authprovider>
    <div>
      <h1>Hello</h1>
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
        <ItemList/>
      </div>
    </div>
    // </Authprovider>

  )
}

export default App;
