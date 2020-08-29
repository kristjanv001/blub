import React from "react";
import Comments from "./Comments";
import DeletePostBtn from "./DeletePostBtn";

export default function Post(props) {
  const { username, imageUrl, caption } = props.post;
  const { postId, currentUser } = props;

  return (
    <div
      id="post-container"
      className="max-w-lg border border-gray-400 bg-gray-300 mb-10 mx-1 shadow-sm rounded-sm"
    >
      <div id="post-header" className="p-5 flex content-center">
        <span className="font-bold flex-1">{username}</span>

        {currentUser && currentUser.displayName === username && (
          <span>
            <DeletePostBtn postId={postId} currentUser={currentUser} />
          </span>
        )}
      </div>
      <div
        id="post-image-container"
        className="border-t border-b border-gray-400"
      >
        <img alt="random" src={imageUrl}></img>
      </div>
      <div id="post-footer" className="p-5 flex flex-col">
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
