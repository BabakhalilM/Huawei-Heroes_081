import React, { useContext, useState } from 'react';
// import './signup.css';
import "./SignupForm.css";
import { Authcontext } from '../context/loginauth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const {formData, setFormData, setData, data } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.get('https://huawei-heroes-081-5.onrender.com/data');
      setLoading(false);

      const users = response.data;
      const user = users.find((person) => person.email === formData.email);

      if (!user) {
        setErrorMessage("You don't have an account. Please sign up first.");
      } else if (user.fruit !== formData.fruit) {
        setErrorMessage("Incorrect answer to the security question.");
      } else {
        setData(user.cart);
        setPasswordReset(true);
      }
    } catch (err) {
      setLoading(false);
      console.log('Error on fetching', err);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('https://huawei-heroes-081-5.onrender.com/data');
      const users = response.data;
      const user = users.find((person) => person.email === formData.email && person.fruit === formData.fruit);

      if (user) {
        const updatedUser = { ...user, password: newPassword };
        await axios.put(`https://huawei-heroes-081-5.onrender.com/data/${user.id}`, updatedUser);
        setLoading(false);
        alert('Password updated successfully!');
        navigate('/');  // Replace with your main page route
      }
    } catch (err) {
      setLoading(false);
      console.log('Error updating password', err);
    }
  };

  return (
    <form className="signup-container" onSubmit={passwordReset ? handlePasswordReset : handleSubmit}>
      {!passwordReset ? (
        <div className="questions">
          <h4>By answering this question you can reset your password</h4>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" onChange={handleChange} required /><br/><p></p>
          <label htmlFor="q1">Q1: Enter your favorite fruit along with friend name: </label>
          <input type="text" id="q1" name="fruit" onChange={handleChange} required />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p></p>
          <button className='btn' type="submit">{loading ? 'Loading...' : 'Login'}</button>
        </div>
      ) : (
        <div className="reset-password">
          <h4>Reset your password</h4>
          <label htmlFor="newPassword">New Password: </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            required
          />
          <button className='btn' type="submit">{loading ? 'Loading...' : 'Reset Password'}</button>
        </div>
      )}
    </form>
  );
};

export default ForgotPassword;
