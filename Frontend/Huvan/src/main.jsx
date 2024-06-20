import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Authprovider } from './Components/context/loginauth.jsx'
import { Amountprovider } from './Components/userpanel/Cartshow.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <Amountprovider>
        <BrowserRouter>
          {/* <ChakraProvider> */}
          <App />
          {/* </ChakraProvider> */}
        </BrowserRouter>
      </Amountprovider>
    </Authprovider>
  </React.StrictMode>,
)
