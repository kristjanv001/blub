import React from "react";
import logo from "../logo.svg";
import "./NavBar.css";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";
import SignUpBtn from "./SignUpBtn";
import AddPostBtn from "./AddPostBtn";

export default function NavBar(props) {
  const {
    setShowSignUpModal,
    setShowLogInModal,
    setShowAddPostModal,
    // currentUser,
    // username,
  } = props;

  const localUser = JSON.parse(localStorage.getItem("authUser"));

  return (
    <div
      id="navbar-container"
      className="bg-indigo-200 flex flex-row items-center justify-between border-solid border-b border-gray-500 sticky top-0"
    >
      <div
        id="navbar-logo-container"
        className="flex flex-row items-center p-1"
      >
        <img alt="logo" src={logo}></img>
        <h1
          id="navbar-logo-text"
          className="text-indigo-700 text-2xl sm:text-3xl"
        >
          Blub
        </h1>
      </div>
      <div id="navlinks-container">
        {localUser ? (
          <div className="flex justify-center items-center">
             {/* <p>{username ? username : "no username"}</p>
              <p>
                {currentUser ? currentUser.displayName : "no currentUser"}
              </p> */}
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
