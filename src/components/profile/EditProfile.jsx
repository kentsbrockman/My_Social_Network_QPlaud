import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditProfile } from '../../redux/authentication/authMiddleware';

const EditProfile = () => {
  const loginInfo = useSelector((state) => state.auth);
  const currentUser = loginInfo.user;
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [description, setDescription] = useState(currentUser.description);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username,
      email,
      description
    };
    dispatch(fetchEditProfile(userData));
  };

  console.log(loginInfo);
  return (
    <div className="EditProfile">
      Modifier mon profil :
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <input type="submit" value="Valider les changements"></input>
      </form>
      {loginInfo.error && <p> Erreur : {loginInfo.error}</p>}
    </div>
  );
};

export default EditProfile;