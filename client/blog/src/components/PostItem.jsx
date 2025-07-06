import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <div>
      <h2>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h2>
      <p>{post.content.slice(0, 100)}...</p>
      <small>By {post.author?.username} in {post.category?.name}</small>
    </div>
  );
}
