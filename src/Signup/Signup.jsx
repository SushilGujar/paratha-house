import React, { useState } from "react";
import FormInput from "../SignIn/FormInput";
import "./signup.styles.scss";
import CustomButton from "../SignIn/CustomButton";
import { auth } from "../Auth/Firebase.Utils";

export default function SignUp() {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(userCtx => {
            userCtx.user.updateProfile({
                displayName: user.displayName,
            });
        })
        .catch(function(error) {
            console.log(error.message,7000);
        });
      //createUserProfileDocument(authUser, user.displayName);
      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h3 className="title">I do not have an account</h3>
      <span className="sign-up header">Signup with you email and password</span>
      <form className="sign-up form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          label="email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          label="Confirm Passwprd"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
