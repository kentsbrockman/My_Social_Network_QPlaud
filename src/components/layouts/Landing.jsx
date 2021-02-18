import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="jumbotron text-center">
      <h2>Welcome to My Social Network</h2>
      <p>This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      <hr className="my-4" />
      <p>Log in now to start posting silly stuff on the website 😁</p>
      <button className="link_login btn btn-primary rounded">
        <Link to ="/login"
          className="text-decoration-none text-white">
          Log in
        </Link>
      </button>
    </div>
  )
}

export default Landing;