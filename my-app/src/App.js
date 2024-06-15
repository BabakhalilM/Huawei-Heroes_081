// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
import SignupForm from './componets/SignupForm';
import LoginForm from './componets/LoginForm';
import Nav from './componets/Nav';
import ForgotPassword from './componets/ForgotPassword';
import { Route, Routes } from 'react-router';
// import VerifyEmailForm from './componets/VerifyEmailForm';
// import { Authprovider } from './context/loginauth';
// import { Link } from 'react-router-dom';
import AdminPage from './componets/AdminPage';
import AddCardForm from './componets/AddCardForm';
import EditCard from './componets/EditCard';


function App() {
  // console.log("hekjkjg");
  return (
    // <Authprovider>
    <div>
    <h1>Hello</h1>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminPage />} />
        <Route path="/add-card" element={<AddCardForm />} />
        <Route path="/edit-card/:id" element={<EditCard />} />
        </Routes>
      </div>
      </div>
      // </Authprovider>
    
  )
}

export default App;
