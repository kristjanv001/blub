import React from "react";

export default function SignUpBtn(props) {
  const { setShowSignUpModal } = props;
  return (
    <button
      onClick={() => setShowSignUpModal(true)}
      style={{ transition: "all .15s ease" }}
      className="bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded"
    >
      Sign Up
    </button>
  );
}
