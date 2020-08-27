import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <div id="posts-container" className="mt-10 flex flex-col items-center">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
