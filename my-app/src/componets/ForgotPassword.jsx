import React, { useContext, useState } from 'react';
import './signup.css';
import { Authcontext } from '../context/loginauth';
import axios from 'axios';

const ForgotPassword = () => {
    
  const { formData, setFormData, setData,data } = useContext(Authcontext);
    // const [userpresent,setUserpresent]=useState(false);
    const [Loading,setLoading]=useState(false);

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
          const response = await axios.get('https://huawei-heroes-081-2.onrender.com/data');
          setLoading(false);
    
          const users = response.data;
          console.log(users);
    
          const user = users.find(
            (person) => person.fruit === formData.fruit
          );
    
          if (user) {
            setData(user.cart); 
            console.log('User found:', formData);
            console.log(data);
          } else {
            alert("You don't have an account. Please sign up first.");
          }
        } catch (err) {
          setLoading(false);
          console.log('Error on fetching', err);
        }
      };
    
    return (
        <form className="signup-container" onClick={handleSubmit}>
        <div className='questions'>
            <h4>By answering This Questions you can Login into Your Account</h4>
            <label htmlFor="q1">Q1: Enter your Favorite Fruit with Friend Name : </label>
            <input type="text" id='q1' name='fruit' onChange={handleChange} required  />
            <h1></h1>
            <button type='submit'>{Loading? "Loading..":"Login"}</button>
        </div>
        </form>
    )
}

export default ForgotPassword
