import React from "react";
import FormBtn from "./FormBtn";
import { auth } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";

export default function SignUpForm(props) {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    setShowSignUpModal,
  } = props;

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("username FROM SIGNUPFORM:", username);
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    setShowSignUpModal(false);
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <div id="form-container">
          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            label="Username"
            type="text"
            placeholder="Choose an awesome username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormBtn type="submit" buttonText="Sign Up" onClick={signUp} />
        </div>
      </form>
    </div>
  );
}
