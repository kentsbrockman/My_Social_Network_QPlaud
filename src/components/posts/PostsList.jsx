import PostDisplay from "./PostDisplay";

const PostsList = ({ data }) => {
  return (
    <div className="PostsList">
      <h3>Latest posts</h3>
      <p>Number of posts: {data.count}</p>
      <div>
        {data.currentPosts &&
          data.currentPosts.map((post) => (
            <PostDisplay key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default PostsList;