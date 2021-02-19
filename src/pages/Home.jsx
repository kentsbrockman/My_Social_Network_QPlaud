import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postsMiddleware';
import Landing from '../components/layouts/Landing';
import NewPost from '../components/posts/NewPost';
import PostsList from '../components/posts/PostsList';

const Home = ({ currentUser }) => {

  const [newPost, setNewPost] = useState();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const pullData = (lastPost) => {
    setNewPost(lastPost);
    dispatch(fetchPosts());
  };

  useEffect(() => {
    dispatch(fetchPosts());
    const interval = setInterval(() => {
      dispatch(fetchPosts())
    }, 60*1000);
    return () => {
      clearInterval(interval)
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) {
    return (
      <Landing />
    );
  ;}

  return (
    <div className="Home">
      <NewPost data={newPost} onSave={pullData} />
      <PostsList data={posts} />
    </div>
  )
}

export default Home;