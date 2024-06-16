import React from 'react';

import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  {/* <BrowserRouter> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  {/* </BrowserRouter> */}
</React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();