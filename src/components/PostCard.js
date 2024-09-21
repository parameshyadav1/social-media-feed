import React from 'react';

const PostCard = ({ post, onLike }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <img src={post.image} alt="post-img" style={{ width: '100%', height: 'auto' }} />
      <p>{post.body}</p>
      <button onClick={() => onLike(post.id)}>
        {post.liked ? 'Unlike' : 'Like'} {post.likes}
      </button>
    </div>
  );
};

export default PostCard;
