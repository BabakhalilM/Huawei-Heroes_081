
// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// //gfhd

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

// // import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// // import { auth } from '../firebase';
 

// const SignupForm = () => {

// const firebaseConfig = {
//   apiKey: "AIzaSyDdiwJZ-jK2Ju1YjeWKxDIoofO8BHhVllY",
//   authDomain: "huawei-heroes081.firebaseapp.com",
//   databaseURL: "https://huawei-heroes081-default-rtdb.firebaseio.com",
//   projectId: "huawei-heroes081",
//   storageBucket: "huawei-heroes081.appspot.com",
//   messagingSenderId: "457276554402",
//   appId: "1:457276554402:web:84df22529b2efe96702bfb"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const database=getDatabase(app);
// const auth=getAuth();



//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     fruit: ''
//   });
//   const {userid,setuserid}=useContext();


//   const navigate = useNavigate();
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
 
//     const onSubmit = async (e) => {
//       e.preventDefault()
     
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
 
   
//     }


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   useEffect(()=>{
//     const fetchData=async ()=>{
//       try{
//         const responce= await axios.get("https://huawei-heroes-081-986o.onrender.com/user");
//         console.log(responce.data);
//       }catch (err){
//         console.log("Error accur:",err);

//       }
//     }
//     fetchData();
//   },[]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form validation logic here (e.g., check password confirmation)
//     console.log('Form submitted:', formData);
//     // Example: Check if password and confirmPassword match
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }


//     // Example: Send formData to server for registration
//     // axios.post('/api/signup', formData)
//     //   .then(response => {
//     //     console.log('Signup successful!', response.data);
//     //     // Navigate to login page after successful signup
//     //     // You can use useHistory or useNavigate for navigation
//     //   })
//     //   .catch(error => {
//     //     console.error('Error signing up:', error);
//     //     // Handle error (e.g., display error message)
//     //   });
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='questions'>
//           <h6>when you forgot password you can login by answering this Questions</h6>
//           <label htmlFor="q1">Q1: Enter your Favorite Fruit along with your Friend Name : </label>
//           <input type="text" id='q1' name='fruit' onChange={handleChange} required value={formData.fruit}/>
//         </div>
//         <br/>
//         <button type="submit">Sign Up</button>
//         <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;













import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDdiwJZ-jK2Ju1YjeWKxDIoofO8BHhVllY",
  authDomain: "huawei-heroes081.firebaseapp.com",
  databaseURL: "https://huawei-heroes081-default-rtdb.firebaseio.com",
  projectId: "huawei-heroes081",
  storageBucket: "huawei-heroes081.appspot.com",
  messagingSenderId: "457276554402",
  appId: "1:457276554402:web:84df22529b2efe96702bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fruit: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      setMessage('Verification email sent. Please check your inbox.');
      setError('');
    } catch (error) {
      setError('Error creating account: ' + error.message);
      setMessage('');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className='questions'>
          <h6>When you forget your password, you can login by answering this question:</h6>
          <label htmlFor="q1">Q1: Enter your favorite fruit along with your friend's name:</label>
          <input type="text" id='q1' name='fruit' onChange={handleChange} required value={formData.fruit}/>
        </div>
        <br/>
        <button type="submit">Sign Up</button>
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
        <p>Already have an account? <Link to="/loginForm">Login</Link></p>
      </form>
    </div>
  );
};

export default SignupForm;
