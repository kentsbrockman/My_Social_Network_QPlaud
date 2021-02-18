import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProfileDisplay from '../components/profile/ProfileDisplay';
import EditProfile from '../components/profile/EditProfile';

const Profile = ({ currentUser }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  const history = useHistory();

  if (!currentUser) {
    alert("Oh no! You cannot access this page now 😭 Please log in first.");
    history.push("/login");
  } else {
    let API_BASE_URL;

    if (!userId) {
      API_BASE_URL = `https://thp-strapi-social-network.herokuapp.com/users/me`;
    } else {
      API_BASE_URL = `https://thp-strapi-social-network.herokuapp.com/users/${userId}`;
    };
    
    const token = Cookies.get('token');

    fetch(API_BASE_URL, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => setProfile(data));
  };

  if (!profile) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <>
      <div className="my-2">
        <ProfileDisplay data={profile} />
        {profile && profile.id === currentUser.id && editing && <EditProfile />}
        {profile && profile.id === currentUser.id && !editing && (
          <button className="btn btn-primary mb-2" onClick={() => setEditing(!editing)}>
            Edit profile
          </button>
        )}
      </div>
    </>
  );
};

export default Profile;