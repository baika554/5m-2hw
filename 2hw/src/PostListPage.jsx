import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Link to="/create">Create Post</Link>
    </div>
  );
}

export default PostListPage;
