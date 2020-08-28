import React, { useEffect } from "react";
import FormButton from "./FormButton";
import { auth } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";

export default function LogInForm(props) {
  const {
    email,
    setEmail,
    username,
    password,
    setPassword,
    setShowLogInModal,
    currentUser,
    setCurrentUser,
  } = props;

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setShowLogInModal(false);
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
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
  );
}
