import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Authcontext } from './context/loginauth';
import { Authprovider } from './context/loginauth.jsx';
import { Amountprovider } from './userpanel/Cartshow.jsx';
// import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <React.StrictMode>
      <Amountprovider>
      {/* <ChakraProvider> */}
      <BrowserRouter>
      <Authprovider>
        <App/>
      </Authprovider>
      </BrowserRouter>
      {/* </ChakraProvider> */}
      </Amountprovider>
    </React.StrictMode>
  

);

reportWebVitals();
