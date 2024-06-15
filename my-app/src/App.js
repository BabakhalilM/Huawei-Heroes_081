// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import SignupForm from './componets/SignupForm';
import LoginForm from './componets/LoginForm';
import Nav from './componets/Nav';
import ForgotPassword from './componets/ForgotPassword';
import { Route, Routes } from 'react-router';
// import VerifyEmailForm from './componets/VerifyEmailForm';
// import { Authprovider } from './context/loginauth';
// import { Link } from 'react-router-dom';

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
          
        </Routes>
      </div>
      </div>
      // </Authprovider>
    
  )
}

export default App;
