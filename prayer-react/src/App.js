import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import dataSource from "./dataSource";
import PostList from "./PostList";
import EditPost from "./EditPost";

function App() {
  const [postList, setPostList] = useState([]);
  const loadPosts = async () => {
    const response = await dataSource.get("/prayers");

    setPostList(response.data);
    // console.log('posts', response.data);
  };

  const onEditPost = function(navigate) {
    loadPosts();
    navigate('/');
  }

  const onDelete = function() {
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PostList posts={postList} onDelete={onDelete} />} />
        <Route exact path="/new" element={<EditPost onEditPost={onEditPost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
