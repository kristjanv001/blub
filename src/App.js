import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Modal from "./components/Modal";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  return (
    <div className="bg-gray-400 min-h-screen">
      <NavBar
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
      />

      <Modal
        modalHeading="Sign Up"
        showModal={showSignUpModal}
        setShowModal={setShowSignUpModal}
      >
        <SignUpForm setShowSignUpModal={setShowSignUpModal} />
      </Modal>

      <Modal
        modalHeading="Log In"
        showModal={showLogInModal}
        setShowModal={setShowLogInModal}
      >
        <LogInForm setShowLogInModal={setShowLogInModal} />
      </Modal>

      <Posts />
    </div>
  );
}

export default App;
