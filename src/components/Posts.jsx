import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase/firebaseConfig";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, post: doc.data() };
        })
      );
    });
  }, []);

  return (
    <div id="posts-container" className="mt-10 flex flex-col items-center">
      {posts.map(({ id, post }) => {
        return <Post key={id} post={post} />;
      })}
    </div>
  );
}
