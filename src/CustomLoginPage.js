// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginForm = props => (
  <div>
    <div style={{fontFamily: "monospace", marginLeft: '15px'}}>
      <p>Username: user@example.com</p>
      <p>Password: 123456</p>
    </div>
    <LoginForm {...props} />
  </div>
);

const CustomLoginPage = props => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);

export default CustomLoginPage;
