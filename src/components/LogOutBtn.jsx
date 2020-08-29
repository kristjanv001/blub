import React from "react";
import { auth } from "../firebase/firebaseConfig";

export default function LogOutBtn() {
  return (
    <button
      onClick={() => auth.signOut()}
      style={{ transition: "all .15s ease" }}
      className="bg-gray-300 hover:bg-red-400 text-indigo-900 font-bold py-2 px-4 rounded inline-flex items-center "
    >
      Log Out
    </button>
  );
}
