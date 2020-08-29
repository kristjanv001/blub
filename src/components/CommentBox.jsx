import React from "react";

export default function CommentBox(props) {
  const { type, placeholder, value, onChange, onSubmit } = props;

  return (
    <form className="flex pt-4" onSubmit={onSubmit}>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        disabled={!value}
        className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 items-center"
      >
        Post
      </button>
    </form>
  );
}
