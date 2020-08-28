import React from "react";
import logo from "../logo.svg";
import "./NavBar.css";
import Button from "./Button";

export default function NavBar(props) {
  const { setShowSignUpModal, setShowLogInModal } = props;

  return (
    <div
      id="navbar-container"
      className="bg-indigo-200 flex flex-row items-center border-solid border-b border-gray-500"
    >
      <div
        id="navbar-logo-container"
        className="flex flex-row items-center p-1 flex-grow"
      >
        <img alt="logo" src={logo}></img>
        <h1 id="navbar-logo-text" className="text-indigo-700 text-4xl">
          Blub
        </h1>
      </div>
      <div id="navlinks-container" className="flex-grow-0 pr-3">
        <Button buttonText="Sign Up" clickHandler={setShowSignUpModal} />
        <Button buttonText="Log In" clickHandler={setShowLogInModal} />
      </div>
    </div>
  );
}
