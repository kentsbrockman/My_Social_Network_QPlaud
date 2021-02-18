import { useDispatch, useSelector } from 'react-redux';
import { loginFetch } from '../redux/authentication/authMiddleware';
import { Redirect, useHistory } from 'react-router-dom';
import LoginDisplay from '../components/auth/LoginDisplay';

const Login = ({ currentUser }) => {

  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.auth);
  const history = useHistory();

  const handleSubmit = (userCredentials) => {
    dispatch(loginFetch(userCredentials));
    history.push('/');
  };

  if (currentUser) {
    alert("You are already logged in dear user 😁");
    return <Redirect to="/" />
  }

  return (
    <>
      <LoginDisplay onSubmit={handleSubmit}/>
      {loginInfo.error && <p> Error : {loginInfo.error}</p>}
    </>
  );
};

 export default Login;