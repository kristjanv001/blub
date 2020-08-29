import React from "react";

export default function FormButton(props) {
  const { buttonText, onClick } = props;

  return (
    <button
      style={{ transition: "all .15s ease" }}
      onClick={onClick}
      className="bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded w-full"
    >
      {buttonText}
    </button>
  );
}
