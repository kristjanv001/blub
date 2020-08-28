import React, { useState } from "react";
import FormButton from "./FormButton";
import { auth } from "../firebase/firebaseConfig";
import FormInput from "./FormInput";

export default function LogInForm(props) {
  const { setShowLogInModal } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    // console.log("logged in");
    // setShowLogInModal(false);
    
  };

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
