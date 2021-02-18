import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginDisplay = ( {onSubmit} ) => {

  const [identifier , setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const submitDetails = (event) => {
    event.preventDefault();
    onSubmit({
      identifier,
      password
    });
  }

  return (
    <form onSubmit={submitDetails} className="my-3 w-75 mx-auto">
      <h2 className="text-center">Log in</h2>
      <div className="form-group text-left">
        <label>Username or Email</label>
        <input type="identifier" 
                className="form-control" 
                aria-describedby="identifierHelp" 
                placeholder="Enter username or email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
        />
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
      <div className="d-flex justify-content-between align-items-baseline">
        <button type="submit" className="btn btn-primary">Log in</button>
        <p>
          New on the platform?
          <Link to="register/"> Sign up now!</Link>
        </p>
      </div>
    </form>
  );

};

export default LoginDisplay;