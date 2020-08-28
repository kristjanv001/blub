import React, { useState } from "react";
import Button from "./Button";
import { auth } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";

export default function SignUpForm(props) {
  const { setShowSignUpModal } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
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
          <Button type="submit" buttonText="Sign Up" />
        </div>
      </form>
    </div>
  );
}
