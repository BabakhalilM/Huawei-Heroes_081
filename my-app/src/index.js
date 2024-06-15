import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Authcontext } from './context/loginauth';
import { Authprovider } from './context/loginauth.jsx';
// import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <React.StrictMode>
      {/* <ChakraProvider> */}
      <BrowserRouter>
      <Authprovider>
        <App/>
      </Authprovider>
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
