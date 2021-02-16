import SigninFetch from './SigninFetch';
import SigninDisplay from './SigninDisplay';

const SigninContainer = () => {

  const handleSubmit = (data) => {
    if(data.password === data.confPassword) {
      SigninFetch(data)    
    } else {
      console.log ("Rollback handle submit")
    }
  };

  // const sendDetailsToServer = (data) => {
  //   const API_BASE_URL = "http://localhost:1337/auth/local/register";
  //   if (data.username.length && data.email.length && data.password.length) {
  //     console.log ("Send details to server - Beginning of the fetch");
  //     const payload = {
  //       username: data.username,
  //       email: data.email,
  //       password: data.password
  //     };
  //     fetch(API_BASE_URL, {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(payload)
  //       })
  //       .then(response => {
  //         if (response.status === 200) {
  //           response.json()
  //         .then(data => {
  //           console.log(data);
  //         })
  //         console.log("Send details to server - Registration successful")
  //         //Redirect to Home
  //         } else {
  //           console.log("Send details to server - Unexpected error - No response from the endpoint.")
  //         }
  //       })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   } else {
  //     console.log ("Send details to server - Rollback - Invalid credentials");
  //   }
  // };

  return (
    <SigninDisplay onSubmit={handleSubmit}/>
  );
};

 export default SigninContainer;