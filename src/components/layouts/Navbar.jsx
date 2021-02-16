import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const token = Cookies.get('token');
  const processedId = (jwt_decode(token)).id;

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/user_profile/${processedId}`}>Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar