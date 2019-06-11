import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { URLParser } from '~/common';

function Post(props) {
  const { location } = props;
  const posts = useSelector(state => state.posts);
  const [post] = useState(posts.data.find(post => post.slug === URLParser(location, '/posts/:slug').slug));

  return (
    <div>
      <Link to="/">Voltar</Link>

      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </div>
  );
}

export default Post;
