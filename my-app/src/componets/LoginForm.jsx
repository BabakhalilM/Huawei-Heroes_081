
// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';
// import axios from 'axios';
// import { Authcontext } from '../context/loginauth';

// const LoginForm = () => {
//   // const [formData, setFormData] = useState({
//   //   email: '',
//   //   password: ''
//   // });
//   const { formData, setFormData, setData } = useContext(Authcontext);
//   const [loading, setLoading] = useState(false);
//   const [tempdata,setTempdata]=useState([]);
//   const [userpresent,setUserpresent]=useState(false);
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

//       setLoading(true);
//       const fetchData = async () => {
//         try {
//           const responce = await axios.get(`https://huawei-heroes-081-1.onrender.com/data`);
//           setLoading(false);
          
//           setTempdata(responce.data);
//           console.log(tempdata);
//           tempdata.forEach((person)=>{
//               if(person.email==formData.email && person.password==formData.password){
//                   setUserpresent(true);
//                   setData(responce.data.cart);
//               }
//           });
//           if(userpresent){
//               console.log(formData);
//           }else{
//             alert("you don't have account sign-up first");
//           }

//         } catch (err) {
//           console.log("error on fetching", err);
          
//         }
//       }
//       fetchData();


//     // }, []);
//   };


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
//         {/* <button type="button" onClick={onSignupClick}>Sign Up</button> */}
//       </form>

//       {/* {message && <p className="message">{message}</p>} */}
//       <p>Don't have an account? <Link to="/SignupForm">Sign up</Link></p>

//       <p><Link to="/ForgotPassword">Forgot Password</Link></p>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { Authcontext } from '../context/loginauth';

const LoginForm = () => {
  const { formData, setFormData, setData,data } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);
  const [userpresent, setUserpresent] = useState(false);

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
      const response = await axios.get('https://huawei-heroes-081-1.onrender.com/data');
      setLoading(false);

      const users = response.data;
      console.log(users);

      const user = users.find(
        (person) => person.email === formData.email && person.passWord === formData.password
      );

      if (user) {
        setUserpresent(true);
        setData(user.cart); 
        console.log('User found:', formData);
        console.log(data);
      } else {
        setUserpresent(false);
        alert("You don't have an account. Please sign up first.");
      }
    } catch (err) {
      setLoading(false);
      console.log('Error on fetching', err);
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