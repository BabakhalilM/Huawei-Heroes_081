// import React, { useState } from 'react';
// import { getAuth, sendEmailVerification } from 'firebase/auth';
// // import './verifyEmail.css';

// const VerifyEmailForm = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const auth = getAuth();

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleVerifyEmail = async (e) => {
//     e.preventDefault();

//     try {
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await sendEmailVerification(user);
//         setMessage('Verification email sent. Please check your inbox.');
//         setError('');
//       } else {
//         setError('No user is currently signed in.ok check mail');
//       }
//     } catch (error) {
//       setError('Error sending verification email: ' + error.message);
//     }
//   };

//   return (
//     <div className="verify-email-container">
//       <form className="verify-email-form" onSubmit={handleVerifyEmail}>
//         <h2>Verify Email</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send Verification Email</button>
//         {message && <p className="message">{message}</p>}
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default VerifyEmailForm;

import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.reload().then(() => {
          if (user.emailVerified) {
            setIsVerified(true);
            navigate('/loginForm'); // Navigate to login if verified
          } else {
            setIsVerified(false);
          }
        });
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className="verify-email-container">
      {!isVerified ? (
        <div>
          <h2>Verify Your Email</h2>
          <p>A verification email has been sent to your email address. Please check your inbox and verify your email to proceed.</p>
        </div>
      ) : (
        <div>
          <h2>Email Verified</h2>
          <p>Your email has been successfully verified. You can now <Link to="/loginForm">login</Link>.</p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
