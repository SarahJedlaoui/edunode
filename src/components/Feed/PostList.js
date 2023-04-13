import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";


export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("https://edunode.herokuapp.com/api/post/posts");
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {posts.map((post) => (
        <div className="col" key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
    </>
  );
}
