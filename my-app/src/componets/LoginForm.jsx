// import React, { useState } from 'react';
// import './login.css';
// import { useNavigate } from 'react-router-dom';
// import './ForgotPassword'

// const LoginForm = ({ onSignupClick }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate=useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };
//   // const handleforget=()=>{
//   //     console.log("hbjrhfk");
//   //     navigate('/ForgotPassword');
//   // }
//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
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
//         <button type="submit">Login</button>
//         <button type="button" onClick={onSignupClick}>Sign Up</button>
//       </form>
//       {message && <p>{message}</p>}
//       <p>Don't have an account? <Link to="/signupForm">Sign up</Link></p>
//       <p><Link to="/ForgotPassword">Forgot Password</Link></p>
      
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './login.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // const [message, setMessage] = useState('');
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Here you can add your logic for authentication
    // For example, you can use Firebase signInWithEmailAndPassword
    // and handle success/failure accordingly
    // Example code (uncomment and modify as per your Firebase setup):
    // signInWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then(userCredential => {
    //     setMessage('Login successful');
    //     navigate('/dashboard'); // Navigate to dashboard upon successful login
    //   })
    //   .catch(error => {
    //     setMessage(`Error: ${error.message}`);
    //   });
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
        <button type="submit">Login</button>
        {/* <button type="button" onClick={onSignupClick}>Sign Up</button> */}
      </form>
      {/* {message && <p className="message">{message}</p>} */}
      <p>Don't have an account? <Link to="/VerifyEmailForm">Sign up</Link></p>

      <p><Link to="/ForgotPassword">Forgot Password</Link></p>
    </div>
  );
};

export default LoginForm;
