import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import dataSource from "./dataSource";
import PostList from "./PostList";
import EditPost from "./EditPost";

function App() {
  const [postList, setPostList] = useState([]);
  const loadAlbums = async () => {
    const response = await dataSource.get("/prayers");

    setPostList(response.data);
    // console.log('posts', response.data);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PostList posts={postList} />} />
        <Route exact path="/new" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
