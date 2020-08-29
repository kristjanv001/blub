import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase/firebaseConfig";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  const { currentUser } = props;

  // GET POSTS FROM THE DB
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              post: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <div id="posts-container" className="mt-10 flex flex-col items-center">
      {posts.map(({ id, post }) => {
        return (
          <Post currentUser={currentUser} key={id} postId={id} post={post} />
        );
      })}
    </div>
  );
}
