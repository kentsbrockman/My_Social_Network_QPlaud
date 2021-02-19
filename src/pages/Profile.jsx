import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postsMiddleware';
import { fetchEditProfile } from '../redux/authentication/authMiddleware';
import Cookies from 'js-cookie';
import ProfileDisplay from '../components/profile/ProfileDisplay';
import EditProfile from '../components/profile/EditProfile';
import PostsList from '../components/posts/PostsList';

const Profile = ({ currentUser }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  const history = useHistory();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPosts(userId)), [dispatch, userId]);

  if (!currentUser) {
    alert("Oh no! You cannot access this page now 😭 Please log in first.");
    history.push("/login");
  } else {
    const API_BASE_URL = `https://thp-strapi-social-network.herokuapp.com/users/${userId}`;
    
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

  const updateProfile = (newDetails) => {
    dispatch(fetchEditProfile(newDetails));
    setEditing(editing);
  }

  if (!profile) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <div className="row my-3">
      <div className="col-4">
        <ProfileDisplay data={profile} />
        <EditProfile onSubmit={updateProfile} />
      </div>
      <div className="col-8">
        <PostsList data={posts} />
      </div>
    </div>
  );
};

export default Profile;