import React from "react";
import logo from "../logo.svg";
import "./NavBar.css";
import NavButton from "./NavButton";

export default function NavBar(props) {
  const { setShowSignUpModal, setShowLogInModal } = props;

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
        <NavButton
          backgroundColor="bg-transparent"
          buttonText="Log In"
          clickHandler={setShowLogInModal}
        />
        <span className="mx-4">
          <NavButton buttonText="Sign Up" clickHandler={setShowSignUpModal} />
        </span>
      </div>
    </div>
  );
}
