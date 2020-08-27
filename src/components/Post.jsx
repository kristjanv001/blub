import React from "react";

export default function Post() {
  return (
    <div
      id="post-container"
      className="max-w-lg border border-gray-400 bg-gray-300 mb-10 mx-1"
    >
      <div id="post-header" className="p-5">
        <span className="font-bold">username</span>
      </div>
      <div
        id="post-image-container"
        className="border-t border-b border-gray-400"
      >
        <img src="https://images.unsplash.com/photo-1598550305968-ed684e58ff47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
      </div>
      <div id="post-footer" className="p-3">
        <div id="user-caption">
          <p>
            <span>Wow, this is so dope!</span>
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
