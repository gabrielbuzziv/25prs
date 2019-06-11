import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Home() {
  const posts = useSelector(state => state.posts);

  return (
    <div>
      <h1>Postagens</h1>
      <ul>
        {posts.data
          .filter(post => post.status === 'review')
          .map(post => (
            <li key={String(post.id)}>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
