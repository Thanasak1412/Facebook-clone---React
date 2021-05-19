import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import InputPost from "./InputPost";
import Post from "./Post";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <InputPost addPost={addPost} />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
}

export default App;
