import React from "react";
import Comments from "./Comments";

export default function Post(props) {
  const { username, imageUrl, caption } = props.post;
  const { postId, currentUser } = props;

  return (
    <div
      id="post-container"
      className="max-w-lg border border-gray-400 bg-gray-300 mb-10 mx-1 shadow-sm"
    >
      <div id="post-header" className="p-5">
        <span className="font-bold">{username}</span>
      </div>
      <div
        id="post-image-container"
        className="border-t border-b border-gray-400"
      >
        <img alt="random" src={imageUrl}></img>
      </div>
      <div id="post-footer" className="p-5">
        <div id="user-caption">
          <p>
            <span>{caption}</span>
          </p>
        </div>
        <div id="comments" className="pt-4">
          <Comments postId={postId} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}
