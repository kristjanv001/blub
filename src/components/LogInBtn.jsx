import React from "react";

export default function SignUpBtn(props) {
  const { setShowLogInModal } = props;
  return (
    <button
      onClick={()=> setShowLogInModal(true)}
      style={{ transition: "all .15s ease" }}
      className="bg-transparent hover:bg-indigo-900 text-indigo-700 font-semibold hover:text-gray-200 py-2 px-4 border border-indigo-700 hover:border-transparent rounded"
    >
      Log In
    </button>
  );
}
