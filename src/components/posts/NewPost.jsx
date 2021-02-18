import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/posts/postsMiddleware';
import { Modal } from 'react-bootstrap';
import PostForm from './PostForm';

const NewPost = ( { onSave } ) => {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const savePost = (lastPost) => {
    dispatch(addPost(lastPost));
    onSave(lastPost);
    handleClose();
  }

  return (
    <>
      <div className="d-flex my-3 justify-content-center">
        <button className="btn btn-primary" onClick={handleShow}>Add a new post</button>
      </div>

      <Modal show={show} onHide={handleClose} role="dialog" aria-labelledby="Form to add a new post" >
        <Modal.Header closeButton>
          <Modal.Title>New post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm onSubmit={savePost}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewPost