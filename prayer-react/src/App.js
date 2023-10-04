import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import dataSource from "./dataSource";
import PostList from "./PostList";

function App() {
  const [postList, setPostList] = useState([]);
  const loadAlbums = async () => {
    const response = await dataSource.get("/prayers");

    setPostList(response.data);
    console.log('posts', response.data);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row g-3">
          <PostList posts={postList} />
        </div>
      </div>
    </>
  );
}

export default App;
