import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import './signup.css';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../context/loginauth';

const SignupForm = () => {
  const navigate = useNavigate();
  const [verificationMessage, setVerificationMessage] = useState('');
  const [message, setMessage] = useState('');
  const { formData, setFormData } = useContext(Authcontext);
  const [userCreated, setUserCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const generateUniqueId = () => {
    return Date.now() + Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('Sign up successful! A verification email has been sent. Please verify your email.');
    setVerificationMessage('');
    // setQshow(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      setUserCreated(true); // Set flag to indicate the user was created

    } catch (error) {
      setMessage('Error signing up: ' + error.message);
    }
  };

  const checkVerificationStatus = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    await user.reload();

    if (user.emailVerified) {
      setVerificationMessage('Email verified successfully!');
      
      const newUserData = {
        "id_": generateUniqueId(),
        "name": formData.name,
        "email": formData.email,
        "passWord": formData.password,
        "fruit": formData.fruit, 
        "cart": []
      };
      console.log("new userdata ",newUserData);
      console.log(formData);
      try {
        const response = await axios.post('https://huawei-heroes-081-2.onrender.com/data', formData);
        console.log(response.data);
        console.log("data posted succesfully");
        setMessage('Sign up successful! A verification email has been sent. Please verify your email.');
        navigate('/Nav'); 
      } catch (err) {
        console.log("Error occurred:", err);
        setMessage('Error occurred during sign up. Please try again.');
      }
    } else {
      setVerificationMessage('Email not verified yet. Please check your email and verify.');
    }
  };
  
  const dad = [{
    "id": 2,
    "name": "Test",
    "passWord": "123",
    "email": "asda",
    "cart": []
  }]
    useEffect(() => {
    // const fetchData = async () => {
    //   useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get(`https://huawei-heroes-081-1.onrender.com/data`);
        console.log(responce.data);
        const responced = await axios.post(`https://huawei-heroes-081-1.onrender.com/data`, dad);
        console.log(responced);
        // console.log("dsghkgdfkjg");
      } catch (err) {
        console.log("Error accur:", err);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      {userCreated && (
        <form onSubmit={checkVerificationStatus}>
          <div className='questions'>
            <h5>When you forgot password you can login by answering this question</h5>
            <label htmlFor="q1">Q1: Enter your Favorite Fruit along with your Friend Name:</label>
            <input type="text" id='q1' name='fruit' onChange={handleChange} required value={formData.fruit}
            />
          </div>
          <br />
          <button type='submit'>Login</button>
        </form>
      )}
      {verificationMessage && <p>{verificationMessage}</p>}
      <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
    </div>
  );
};

export default SignupForm;







// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { auth } from './firebase';
// import './signup.css';
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import { Authcontext } from '../context/loginauth';

// const SignupForm = () => {

//   const navigate = useNavigate();

//   const [verificationMessage, setVerificationMessage] = useState('');
//   const [message, setMessage] = useState('');
//   const { qshow, setQshow, formData, setFormData, data, setData } = useContext(Authcontext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     console.log(formData);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage('Sign up successful! A verification email has been sent. Please verify your email.');
//     setVerificationMessage('');
//     setQshow(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//       const user = userCredential.user;

//       await sendEmailVerification(user);

//     } catch (error) {
//       setMessage('Error signing up: ' + error.message);
//     }

//     console.log('Form submitted:', formData);

//   };

//   // const dad = [{
//   //   "id": 2,
//   //   "name": "Test",
//   //   "passWord": "123",
//   //   "email": "asda",
//   //   "cart": []
//   // }]

//   // useEffect(() => {
//   //   // const fetchData = async () => {
//   //   //   useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const responce = await axios.get(`https://huawei-heroes-081-1.onrender.com/data`);
//   //       console.log(responce.data);
//   //       const responced = await axios.post(`https://huawei-heroes-081-1.onrender.com/data`, dad);
//   //       console.log(responced);
//   //       // console.log("dsghkgdfkjg");
//   //     } catch (err) {
//   //       console.log("Error accur:", err);
//   //     }
//   //   }
//   //   fetchData();
//   // }, []);

//   const checkVerificationStatus = async (e) => {
//     e.preventDefault();
//     const user = auth.currentUser;
//     await user.reload();
//     if (user.emailVerified) {

//       setVerificationMessage('Email verified successfully!');
      
//     const generateUniqueId = () => {
//       return Date.now() + Math.random().toString(36).substring(2, 15);
//     };

//     const newUserData = {
//       id_: generateUniqueId(),
//       name: formData.name,
//       email: formData.email,
//       passWord: formData.password,
//       cart: []
//     };
//     try {
//       const response = await axios.post('https://huawei-heroes-081-1.onrender.com/data', newUserData);
//       console.log(response.data);
//       setMessage('Sign up successful! A verification email has been sent. Please verify your email.');
//     } catch (err) {
//       console.log("Error occurred:", err);
//       setMessage('Error occurred during sign up. Please try again.');
//     }      
//       navigate('./Nav');
//     } else {
//       setVerificationMessage('Email not verified yet. Please check your email and Verify.');

//     }
//   };


//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="email">Email:</label>
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
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" >Sign Up</button>
//       </form>
//       {message && <p>{message}</p>}
//       {qshow && <form onSubmit={checkVerificationStatus}>
//         <div className='questions'>
//           <h6>when you forgot password you can login by answering this Questions</h6>
//           <label htmlFor="q1">Q1: Enter your Favorite Fruit along with your Friend Name : </label>
//           <input type="text" id='q1' name='fruit' onChange={handleChange} required value={formData.fruit} />
//         </div>
//         <br />
//         <button type='submit' >Login</button>

//       </form>
//       }
//       {verificationMessage && <p>{verificationMessage}</p>}
//       <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
//     </div>
//   );
// };

// export default SignupForm;



// For varsha

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
