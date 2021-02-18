import { useState, useRef } from 'react';
import { fetchEditPost, fetchDeletePost } from '../../redux/posts/postsMiddleware';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PostDisplay = ({ post }) => {
  const newText = useRef();
  const [editing, setEditing] = useState(false);
  const currentUser = useSelector((state) => state.auth.user);
  const [text, setText] = useState(post.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      dispatch(fetchEditPost(newText.current.value, post.id));
      setText(newText.current.value);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure about that 😬 ??")) {
      dispatch(fetchDeletePost(post.id));
    }
  };

  return (
    <div className="PostDisplay my-4">
      {currentUser && (
        <Link to={"/users/" + post.user.id}>{post.user.username}</Link>
      )}
      {(!editing && <p>{text}</p>) || (
        <input ref={newText} placeholder={text} defaultValue={text} />
      )}

      {currentUser && post.user.id === currentUser.id && (
        <>
          <button type="button" onClick={handleEdit} className="btn btn-success mr-2">
            {(!editing && "Modifier") || "Valider"}
          </button>

          <button type="button" onClick={handleDelete} className="btn btn-danger ml-2">
            Supprimer
          </button>
        </>
      )}
    </div>
  );
};

export default PostDisplay;