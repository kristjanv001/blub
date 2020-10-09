import React from "react";

export default function AddPostBtn(props) {
  const { setShowAddPostModal } = props;

  return (
    <button
      onClick={() => setShowAddPostModal(true)}
      style={{ transition: "all .15s ease" }}
      className="bg-green-500 hover:bg-green-700 text-gray-200 py-2 px-4 rounded "
    >
      <svg
        className="fill-current camera w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
