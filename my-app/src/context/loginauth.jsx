import React, { createContext, useState } from 'react';

// Create the context
export const Authcontext = createContext();

// Create the provider component
export const Authprovider = ({ children }) => {
    
  // const dad = [{
  //   "id": 2,
  //   "name": "Test",
  //   "passWord": "123",
  //   "email": "asda",
  //   "cart": []
  // }]

  const [qshow, setQshow] = useState(false);
  const [formData, setFormData] = useState({
    id:"",
    name:"",
    password: '',
    email:"",
    fruit: ''
  });
  const [data, setData] = useState([]);

  return (
    <Authcontext.Provider value={{ qshow, setQshow, formData, setFormData, data, setData }}>
      {children}
    </Authcontext.Provider>
  );
};
