// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import SignupForm from './componets/SignupForm';
import LoginForm from './componets/LoginForm';
import Nav from './componets/Nav';
import ForgotPassword from './componets/ForgotPassword';
import { Route, Routes } from 'react-router';
import VerifyEmailForm from './componets/VerifyEmailForm';
// import { Link } from 'react-router-dom';

function App() {
  console.log("hekjkjg");
  return (
    <div>
    <h1>hello</h1>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/VerifyEmailForm" element={<VerifyEmailForm/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      </div>
    
  )
}

export default App;
