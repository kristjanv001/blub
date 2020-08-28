import React from "react";

export default function Button(props) {
  const { buttonText, clickHandler } = props;

  return (
    <button
      style={{ transition: "all .15s ease" }}
      onClick={() => clickHandler(true)}
      // className="bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded "

      className={
        props.backgroundColor
          ? `${props.backgroundColor}-200 hover:${props.backgroundColor}-900 font-bold py-2 px-4 rounded text-indigo-900 hover:text-indigo-500`
          : "bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded "
      }
    >
      {buttonText}
    </button>
  );
}
