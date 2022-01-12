import React from "react";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";
import "./signin.styles.scss";
import SignInByPhone from "../Auth/auth_phone_signin.js";
import { auth, signInWithGoogle } from "../Auth/Firebase.Utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            changeHandler={this.handleChange}
            required
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            changeHandler={this.handleChange}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton
              name="Sign in"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign In
            </CustomButton>
            <CustomButton
              onClick={(e) => SignInByPhone(e)}
              phone={this.state.phone}
            >
              Sign In with Phone
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
