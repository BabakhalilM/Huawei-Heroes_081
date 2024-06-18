
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/loginauth';

const Nav = () => {
    
      const { useremail, setFormData,setUseremail } = useContext(Authcontext);

  const handleLogout = () => {
    setFormData({
      name: "",
      password: "",
      email: "",
      fruit: "",
      cart: []
    });
    setUseremail("");

  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {useremail? (
          <>
            <li><Link to="/cartshow">Cart</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/loginForm">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav
