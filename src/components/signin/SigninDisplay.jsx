import React, { useState } from 'react';

const SigninDisplay = ( {onSubmit} ) => {

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
    <form onSubmit={submitDetails}>
      <div className="form-group text-left">
        <label>Username</label>
        <input type="username" 
                className="form-control" 
                id="username" 
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
                id="email" 
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
                id="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group text-left">
        <label>Confirm Password</label>
        <input type="password" 
                className="form-control" 
                id="confirmPassword" 
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );

};

export default SigninDisplay;