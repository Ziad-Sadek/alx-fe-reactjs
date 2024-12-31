import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();  // Extract the dynamic `postId` from the URL

  return (
    <div>
      <h2>Post {postId}</h2>
      <p>Content of post {postId} goes here.</p>
    </div>
  );
}

export default Post;
