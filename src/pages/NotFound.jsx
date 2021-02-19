import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mainbox text-center">
      <h1>404</h1>
      <p>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
      <p>Let's go <Link to="/">home</Link> and try from there.</p>
    </div>
  )
}

export default NotFound;