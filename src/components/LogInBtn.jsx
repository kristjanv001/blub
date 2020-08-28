import React from "react";

export default function SignUpBtn(props) {
  const { setShowLogInModal } = props;
  return (
    <button
      onClick={()=> setShowLogInModal(true)}
      style={{ transition: "all .15s ease" }}
      className="bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded"
    >
      Log In
    </button>
  );
}
