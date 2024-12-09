import React from "react";
import "./SignIn.css";

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Sign In Details:", { email, password });
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignIn} className="signin-form">
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="signin-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="signin-input"
        />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
