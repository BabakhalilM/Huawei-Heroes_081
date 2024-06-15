
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <>
      <p><Link to="/LoginForm">Login</Link></p>
      <Link to="/admin">
        <button>Go to Admin Page</button>
      </Link>
      </>
    );
}

export default Nav
