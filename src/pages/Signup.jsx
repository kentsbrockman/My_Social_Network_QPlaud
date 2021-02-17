import { useDispatch, useSelector } from "react-redux";
import { registerFetch } from '../redux/authentication/authMiddleware';
import { useHistory } from 'react-router-dom';
import SignupDisplay from '../components/forms/SignupDisplay';

const Signup = () => {

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

  return (
    <>
      <SignupDisplay onSubmit={handleSubmit}/>
      {register.error && <p> Error: {register.error}</p>}
    </>
  );
};

 export default Signup;