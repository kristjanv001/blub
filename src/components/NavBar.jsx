import React from "react";
import "./NavBar.css";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";
import SignUpBtn from "./SignUpBtn";
import AddPostBtn from "./AddPostBtn";

export default function NavBar(props) {
  const { setShowSignUpModal, setShowLogInModal, setShowAddPostModal } = props;

  const localUser = JSON.parse(localStorage.getItem("authUser"));

  return (
    <div
      id="navbar-container"
      className="bg-gray-200 flex flex-row items-center justify-between h-20 sticky top-0 shadow-sm"
    >
      <div
        id="navbar-logo-container"
        className="flex flex-row items-center p-1"
      >
        <h1
          id="navbar-logo-text"
          className="text-indigo-700 text-2xl sm:text-3xl pl-4"
        >
          Blub
        </h1>
      </div>
      <div id="navlinks-container">
        {localUser ? (
          <div className="flex justify-center items-center">
            <span className="mr-2">
              <AddPostBtn setShowAddPostModal={setShowAddPostModal} />
            </span>
            <span className="mr-2">
              <LogOutBtn />
            </span>
          </div>
        ) : (
          <div>
            <span className="mr-2">
              <LogInBtn setShowLogInModal={setShowLogInModal} />
            </span>
            <span className="mr-2">
              <SignUpBtn setShowSignUpModal={setShowSignUpModal} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
