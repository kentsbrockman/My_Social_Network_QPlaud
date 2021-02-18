import { useDispatch, useSelector } from "react-redux";
import { registerFetch } from '../redux/authentication/authMiddleware';
import { useHistory, Redirect } from 'react-router-dom';
import SignupDisplay from '../components/auth/SignupDisplay';

const Signup = ({ currentUser }) => {

  const dispatch = useDispatch();
  const register = useSelector((state) => state);
  const history = useHistory();

  const handleSubmit = (newUserData) => {
    if(newUserData.password === newUserData.confPassword) {
      dispatch(registerFetch(newUserData));
      history.push("/");
    } else {
      console.log ("Signup - Passwords don't match")
    }
  };

  if (currentUser) {
    alert("You are already logged in dear user 😁");
    return <Redirect to="/" />
  }

  return (
    <>
      <SignupDisplay onSubmit={handleSubmit}/>
      {register.error && <p> Error: {register.error}</p>}
    </>
  );
};

 export default Signup;