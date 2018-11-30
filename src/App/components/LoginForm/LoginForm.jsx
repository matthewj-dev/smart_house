import React from "react";

const LoginForm = () => (
  <div className="container">
    <label for="uname">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw">
      <b>Password</b>
    </label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit">Login</button>
  </div>
);

export default LoginForm;
