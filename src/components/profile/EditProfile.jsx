import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';

const EditProfile = ( { onSubmit } ) => {
  const loginInfo = useSelector((state) => state.auth);
  const currentUser = loginInfo.user;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [description, setDescription] = useState(currentUser.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      username,
      email,
      description
    });
    handleClose();
  };

  return (
    <div className="EditProfile">

      <button className="my-2 btn btn-primary" onClick={handleShow}>Edit profile</button>

      <Modal show={show} onHide={handleClose} role="dialog" aria-labelledby="Form to add a new post" >
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form show={show} onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                required
                value={username}
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                required
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea
                type="text"
                required
                value={description}
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button className="btn btn-primary float-right">Update</button>
          </form>
          {loginInfo.error && <p> Erreur : {loginInfo.error}</p>}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProfile;