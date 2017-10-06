import React, { Component } from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

class Login extends Component {
  render() {
    return (
    <div>    
        <SignIn />
        <SignUp />
      </div>
    );
  }
}


export default Login;