import React, { useState } from 'react';

const NewPostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body,
      image: URL.createObjectURL(image),
      liked: false,
      likes: 0,
    };

    onNewPost(newPost);
    setTitle('');
    setBody('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Post content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;
