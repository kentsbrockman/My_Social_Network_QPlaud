import SigninFetch from './SigninFetch';
import SigninDisplay from './SigninDisplay';

const SigninContainer = () => {

  const handleSubmit = (data) => {
    if(data.password === data.confPassword) {
      SigninFetch(data) 
    } else {
      console.log ("SigninContainer - Passwords don't match")
    }
  };

  return (
    <SigninDisplay onSubmit={handleSubmit}/>
  );
};

 export default SigninContainer;