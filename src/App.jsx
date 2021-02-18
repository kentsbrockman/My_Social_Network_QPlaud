import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {

  const currentUser = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Navbar currentUser={currentUser} />
      <main className="container my-5">
        <Switch>
          <Route path="/" exact>
            <Home currentUser={currentUser} />
          </Route>
          <Route path="/register">
            <Signup currentUser={currentUser} />
          </Route>
          <Route path="/login">
            <Login currentUser={currentUser} />
          </Route>
          <Route path="/users/:userId">
            <Profile currentUser={currentUser} />
          </Route>
        </Switch>
      </main>
    </Router>
  );

};

export default App;