import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Modal from "./components/Modal";
import SignUpForm from "./components/SignUpForm";
import { auth } from "./firebase/firebaseConfig";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("mounted");
  }, []);

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setShowLogInModal(false);
  };

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
      // perform cleanup action
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <div className="bg-gray-400 min-h-screen">
      <NavBar
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
        currentUser={currentUser}
      />

      <Modal
        modalHeading="Sign Up"
        showModal={showSignUpModal}
        setShowModal={setShowSignUpModal}
      >
        <SignUpForm
          email={email}
          setEmail={setEmail}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setShowSignUpModal={setShowSignUpModal}
        />
      </Modal>

      <Modal
        modalHeading="Log In"
        showModal={showLogInModal}
        setShowModal={setShowLogInModal}
      >
        <div>
          <form onSubmit={logIn}>
            <div id="form-container">
              <FormInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInput
                label="Password"
                type="password"
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit" buttonText="Log In" />
            </div>
          </form>
        </div>
      </Modal>

      <Posts />
    </div>
  );
}

export default App;
