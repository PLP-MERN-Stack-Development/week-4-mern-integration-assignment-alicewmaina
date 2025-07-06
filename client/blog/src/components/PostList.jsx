import { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { fetchPosts } from '../services/api';
import PostItem from './PostItem';

export default function PostList() {
  const { data, loading, error, request } = useApi(fetchPosts);

  useEffect(() => { request(); }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;
  if (!data) return null;

  return (
    <div>
      {data.posts.map(post => <PostItem key={post._id} post={post} />)}
    </div>
  );
}
