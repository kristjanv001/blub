import React from "react";
import { auth } from "../firebase/firebaseConfig";

export default function LogOutBtn() {
  return (
    <button
      onClick={() => auth.signOut()}
      style={{ transition: "all .15s ease" }}
      className="bg-indigo-700 hover:bg-indigo-900 text-gray-200 font-bold py-2 px-4 rounded "
    >
      Log Out
    </button>
  );
}
