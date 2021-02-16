import Cookies from 'js-cookie';

const SigninFetch = (data) => {

  const API_BASE_URL = "http://localhost:1337/auth/local/register";
  if (data.username.length && data.email.length && data.password.length) {
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password
    };
    fetch(API_BASE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.status === 200) {
          response.json()
          .then(token => {
            Cookies.set('token', token.jwt);
          })
          console.log("SigninFetch - Registration successful - Token: ", Cookies.get('token'))
        } else {
          console.log("SigninFetch - Unexpected error - No response from the endpoint.")
        }
      })
    .catch(error => {
      console.error(error);
    });
  } else {
    console.log ("SigninFetch - Rollback - Invalid credentials");
  }
};

export default SigninFetch;