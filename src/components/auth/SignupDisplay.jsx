import { useState } from 'react';

const SignupDisplay = ( {onSubmit} ) => {

  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const submitDetails = (event) => {
    event.preventDefault();
    onSubmit({
      username,
      email,
      password,
      confPassword,
    });
  }

  return (
    <form onSubmit={submitDetails} className="my-3 w-75 mx-auto">
      <h2 className="text-center">Sign up</h2>
      <div className="form-group text-left">
        <label>Username</label>
        <input type="username" 
                className="form-control" 
                aria-describedby="usernameHelp" 
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group text-left">
        <label>Email address</label>
        <input type="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group text-left">
        <label>Password</label>
        <input type="password" 
                className="form-control" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group text-left">
        <label>Confirm Password</label>
        <input type="password" 
                className="form-control" 
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );

};

export default SignupDisplay;