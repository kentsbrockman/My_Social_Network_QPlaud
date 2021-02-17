import { useDispatch, useSelector } from 'react-redux';
import { loginFetch } from '../redux/authentication/authMiddleware';
import { useHistory } from 'react-router-dom';
import LoginDisplay from '../components/forms/LoginDisplay';

const Login = () => {

  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.auth);
  const history = useHistory();

  const handleSubmit = (userCredentials) => {
    dispatch(loginFetch(userCredentials));
    history.push('/');
  };

  return (
    <>
      <LoginDisplay onSubmit={handleSubmit}/>
      {loginInfo.error && <p> Error : {loginInfo.error}</p>}
    </>
  );
};

 export default Login;