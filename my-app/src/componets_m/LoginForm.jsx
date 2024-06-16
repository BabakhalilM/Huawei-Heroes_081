
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { Authcontext } from '../context/loginauth';

const LoginForm = () => {
  const { formData, setFormData, setData,data,setUseremail,useremail } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);
  const [userpresent, setUserpresent] = useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    setLoading(true);
    try {
      const response = await axios.get(`https://huawei-heroes-081-5.onrender.com/data`);
      console.log(response.data); 
  
      setLoading(false);
  
      const users = response.data; 
      console.log(users);
  
      const user = users.find(
        (person) => person.email === formData.email && person.passWord === formData.password
      );
  
      if (user) {
        setUserpresent(true);
        setUseremail(formData.email); 
        setData(user.cart);
        console.log('User found:', user); 
        console.log('Data of cart', user.cart); 
        setFormData({
          name: "",
          password: "",
          email: "",
          fruit: "",
          cart: []
        });
        navigate('/Nav'); 
  
      } else {
        setUserpresent(false);
        alert("Incorrect email or password. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      console.log('Error fetching data:', err);
      alert('Error fetching data. Please try again.');
    }
  };
  

    return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      {userpresent && <p>Login successful!</p>}
      <p>Don't have an account? <Link to="/SignupForm">Sign up</Link></p>
      <p><Link to="/ForgotPassword">Forgot Password</Link></p>
    </div>
  );
};

export default LoginForm;
