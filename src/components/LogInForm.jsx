import React, { useState, useEffect } from "react";
import FormBtn from "./FormBtn";
import { auth } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";

export default function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setShowLogInModal, setCurrentUser } = props;

  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(setShowLogInModal(false))
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
      }
    });

    return () => {
      // perform cleanup
      unsubscribe();
    };
  }, [setCurrentUser]);

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
          <FormBtn type="submit" buttonText="Log In" />
        </div>
      </form>
    </div>
  );
}
