
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

// src/components/SignupForm.js


// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import './signup.css';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../context/loginauth';

const SignupForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [verificationMessage, setVerificationMessage] = useState('');
  const [message, setMessage] = useState('');
  const { qshow, setQshow, formData, setFormData, data, setData } = useContext(Authcontext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };

  // https://huawei-heroes-081-1.onrender.com/data?email=babakhalil@gmail.com
  // const responce = await axios.post(`https://huawei-heroes-081-1.onrender.com/data?email=${formData.email}`,formData);




  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('Sign up successful! A verification email has been sent. Please verify your email.');
    setVerificationMessage('');
    setQshow(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await sendEmailVerification(user);

    } catch (error) {
      setMessage('Error signing up: ' + error.message);
    }

    console.log('Form submitted:', formData);

    const fetchData = async () => {
      try {
        const responce = await axios.post(`https://huawei-heroes-081-1.onrender.com/data`, formData);
        console.log(responce.data);
      } catch (err) {
        console.log("Error accur:", err);
      }
    }
    fetchData();
  };

  // const dad = [{
  //   "id": 2,
  //   "name": "Test",
  //   "passWord": "123",
  //   "email": "asda",
  //   "cart": []
  // }]

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responce = await axios.get(`https://huawei-heroes-081-1.onrender.com/data`);
  //       console.log(responce.data);
  //       const responced = await axios.post(`https://huawei-heroes-081-1.onrender.com/data`, dad);
  //       console.log(responced);
  //       // console.log("dsghkgdfkjg");
  //     } catch (err) {
  //       console.log("Error accur:", err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const checkVerificationStatus = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    await user.reload();
    if (user.emailVerified) {

      setVerificationMessage('Email verified successfully!');
      
      navigate('./Nav');
    } else {
      setVerificationMessage('Email not verified yet. Please check your email and Verify.');

    }
  };


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" >Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      {qshow && <form onSubmit={checkVerificationStatus}>
        <div className='questions'>
          <h6>when you forgot password you can login by answering this Questions</h6>
          <label htmlFor="q1">Q1: Enter your Favorite Fruit along with your Friend Name : </label>
          <input type="text" id='q1' name='fruit' onChange={handleChange} required value={formData.fruit} />
        </div>
        <br />
        <button type='submit' >Login</button>

      </form>
      }
      {verificationMessage && <p>{verificationMessage}</p>}
      <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
    </div>
  );
};

export default SignupForm;




// // src/components/SignupForm.js
// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

// const SignupForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage('');

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await sendEmailVerification(user);

//       setMessage('Sign up successful! A verification email has been sent.');
//     } catch (error) {
//       setMessage('Error signing up: ' + error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       {message && <p>{message}</p>}
//             <p>Already have an account? <Link to="/loginForm">Login</Link></p>
//     </div>
//   );
// };

// export default SignupForm;
