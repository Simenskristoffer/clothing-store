import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label='Password'
          />
          <div className='buttons'>
            <CustomButtom type='submit'>Sign in</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
