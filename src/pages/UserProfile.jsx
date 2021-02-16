import { Switch, Route } from 'react-router-dom';
import Profiledisplay from '../components/profile/ProfileDisplay.jsx'

const UserProfile = () => {
  return (
    <Switch>
      <Route path="/user_profile/:key">
        <Profiledisplay />
      </Route>
    </Switch>
  );
};

export default UserProfile;