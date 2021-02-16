import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user_profile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );

};

export default App;