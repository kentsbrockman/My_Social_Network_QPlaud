import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authentication/authMiddleware';

const Navbar = ({ currentUser }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-light bg-light static-top py-2">

      <div className="navbar nav-items mr-auto">
        <Link to="/" className="navbar-brand">My Social Network</Link>
      </div>

      {!currentUser && (
        <>
          <button className="link_signup btn btn-success rounded d-flex mx-2">
            <Link to = "/register"
              className="text-decoration-none text-white">
              Sign up
            </Link>
          </button>
      
          <button className="link_login btn btn-primary rounded d-flex mx-2">
            <Link to ="/login"
              className="text-decoration-none text-white">
              Log in
            </Link>
          </button>
        </>
      )}

      {currentUser && (
        <>
          <Link to={"/users/" + currentUser.id}>{currentUser.username}</Link>
          <button onClick={logout} className="btn btn-danger mx-2">Log out</button>
        </>
      )}

    </nav>
  );
};

export default Navbar