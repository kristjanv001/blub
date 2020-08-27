import React from "react";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <NavBar />
      <Posts />
    </div>
  );
}

export default App;
