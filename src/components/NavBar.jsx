import React from "react";
import logo from "../logo.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div
      id="navbar-container"
      className="bg-indigo-200 flex border-solid border-b border-gray-500"
    >
      <div
        id="navbar-logo-container"
        className="flex flex-row items-center p-1"
      >
        <img src={logo}></img>
        <h1 id="navbar-logo-text" className="text-indigo-700 text-4xl">
          Blub
        </h1>
      </div>
    </div>
  );
}
