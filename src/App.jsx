import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/layouts/ux/Globalstyle';
import { lightTheme, darkTheme } from './components/layouts/ux/Themes';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {

  const currentUser = useSelector((state) => state.auth.user);

  const [theme, setTheme] = useState(localStorage.getItem("MY_SOCIAL_NETWORK_THEME"));

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("MY_SOCIAL_NETWORK_THEME", "dark");
    } else {
      setTheme("light")
      localStorage.setItem("MY_SOCIAL_NETWORK_THEME", "light");
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar currentUser={currentUser} switchTheme={themeToggler} />
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
      </ThemeProvider>
    </Router>
  );

};

export default App;