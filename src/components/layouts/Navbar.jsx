import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/authentication/authMiddleware';
import IOSSwitch from './ux/IOSSwitch';

const Navbar = ({ currentUser, switchTheme }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-light static-top py-2">

      <div className="navbar nav-items mr-auto">
        <Link to="/" className="font-weight-bold text-decoration-none">My Social Network</Link>
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

          <IOSSwitch onClick={switchTheme} />
        </>
      )}

      {currentUser && (
        <>
          <Link to={"/users/" + currentUser.id} className="mx-2 text-decoration-none">{currentUser.username}</Link>
          <button onClick={logout} className="btn btn-danger mx-2">Log out</button>
          <IOSSwitch onClick={switchTheme} />
        </>
      )}

    </nav>
  );
};

export default Navbar