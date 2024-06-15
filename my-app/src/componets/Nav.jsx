
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <>
      <p><Link to="/LoginForm">Login</Link></p>
      <Link to="/admin">
        <Button>Admin Page</Button>
      </Link>
      </>
    );
}

export default Nav
