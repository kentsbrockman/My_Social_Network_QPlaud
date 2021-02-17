import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { fetchRetrieveUser } from './redux/authentication/authMiddleware';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {

  const currentUser = useSelector((state) => state.auth.user);
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  if (token && !currentUser) {
    const decodedToken = jwt_decode(token);
    dispatch(fetchRetrieveUser(decodedToken.id));
  }

  const PrivateRouteLogin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/register" }} />
        )
      }
    />
  );

  const PrivateRouteProfile = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  return (
    <Router>
      <Navbar currentUser={currentUser} />
      <main className="container my-5">
        <Switch>
          <Route path="/" exact>
            <Home currentUser={currentUser} />
          </Route>
          <Route path="/register" component={Signup} />
          <PrivateRouteLogin path="/login">
            <Login />
          </PrivateRouteLogin>
          <PrivateRouteProfile path="/users/:userId">
            <Profile currentUser={currentUser} />
          </PrivateRouteProfile>
        </Switch>
      </main>
    </Router>
  );

};

export default App;