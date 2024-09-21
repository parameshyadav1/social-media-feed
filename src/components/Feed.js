import React, { useState, useEffect, useRef } from 'react';
import { getPosts } from '../api/postsApi'; // Mock API
import PostCard from './PostCard';
import NewPostForm from './NewPostForm';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const feedEndRef = useRef(null);

  // Custom hook for infinite scroll
  useInfiniteScroll(feedEndRef, () => setPage((prev) => prev + 1));

  useEffect(() => {
    getPosts(page).then((newPosts) => {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    });
  }, [page]);

  // Handle new post creation
  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning
  };

  // Handle "like" functionality
  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      <NewPostForm onNewPost={handleNewPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
      <div ref={feedEndRef}></div>
    </div>
  );
};

export default Feed;
