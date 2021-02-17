import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProfileDisplay from '../components/profile/ProfileDisplay';
import EditProfile from '../components/profile/EditProfile';

const Profile = ({ currentUser }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    let API_BASE_URL;

    if (!userId) {
      API_BASE_URL = `http://localhost:1337/users/me`;
    } else {
      API_BASE_URL = `http://localhost:1337/users/${userId}`;
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
      .then(data => {
        setProfile(data)
      });
  }, [userId]);

  if (!profile) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <>
      <ProfileDisplay data={profile} />
      {profile && profile.id === currentUser.id && editing && <EditProfile />}
      {profile && profile.id === currentUser.id && !editing && (
        <button className="btn btn-primary" onClick={() => setEditing(!editing)}>
          Edit profile
        </button>
      )}
    </>
  );
};

export default Profile;