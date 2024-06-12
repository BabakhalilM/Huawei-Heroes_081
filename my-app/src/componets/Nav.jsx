import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Nav = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [login,setLogin]=useState(false);

    const handleSignupClick = () => {
      setShowLogin(false);
    };
  
    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    return (
        <div>
            <button onClick={()=>setLogin((prev=>!prev)) }>Login</button>
      {login && <div className="App">
        {showLogin ? (
          <LoginForm onSignupClick={handleSignupClick} />
        ) : (
          <SignupForm onLoginClick={handleLoginClick} />
        )}
      </div>}
      </div>
    );
}

export default Nav
