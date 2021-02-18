import { useState } from 'react';
import { useSelector } from 'react-redux';

const PostForm = ( { onSubmit } ) => {

  const [content, setContent] = useState("");

  const currentUser = useSelector((state) => state.auth.user);

  const savePost = (event) => {
    event.preventDefault();
    onSubmit({
      text: content,
      user: currentUser.id,
    });
  }

  return (
    <form onSubmit={savePost}>
      <div className="form-group">
        <textarea
          type="text"
          required
          value={content}
          className="form-control"
          placeholder={`What's on your mind, ${currentUser.username}?`}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn btn-primary float-right">Save post</button>
    </form>
  )
}

export default PostForm;