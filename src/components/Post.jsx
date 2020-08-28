import React from "react";

export default function Post(props) {
  const { username, imgUrl, caption } = props.post;

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
        <img alt="random" src={imgUrl}></img>
      </div>
      <div id="post-footer" className="p-5">
        <div id="user-caption">
          <p>
            <span>{caption}</span>
          </p>
        </div>
        <div id="comments" className="pt-4">
          <p>
            <span className="font-bold pr-3 pl-3">john23</span>
            <span>Nice!</span>
          </p>
          <p>
            <span className="font-bold pr-3 pl-3">nikki99</span>
            <span>This is lit</span>
          </p>
        </div>
      </div>
    </div>
  );
}
