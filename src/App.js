import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Modal from "./components/Modal";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import AddPostForm from "./components/AddPostForm";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // auth + local storage
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setCurrentUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setCurrentUser(null);
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen">
      <NavBar
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
        setShowAddPostModal={setShowAddPostModal}
      />

      <Modal
        modalHeading="Add a New Post"
        showModal={showAddPostModal}
        setShowModal={setShowAddPostModal}
      >
        <AddPostForm
          currentUser={currentUser}
          setShowAddPostModal={setShowAddPostModal}
        />
      </Modal>

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

      <Posts currentUser={currentUser} />
    </div>
  );
}

export default App;
