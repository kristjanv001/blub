import React, { useEffect } from "react";
import FormBtn from "./FormBtn";
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
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log("username FROM LOGINFORM:", username);
        console.log("authUser FROM LOGINFORM:", authUser);
        setUser(authUser);
      } else {
        // user has logged out
        setCurrentUser(null);
      }
    });

    return () => {
      // perform cleanup action
      unsubscribe();
    };
  }, [currentUser]);

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
