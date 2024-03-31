import React from "react";

const Login = () => {
  return (
    <div class="container max-width-500">
      <h2>Login</h2>
      <form action="#">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
