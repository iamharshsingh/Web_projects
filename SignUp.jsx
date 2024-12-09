import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    console.log("Sign Up Details:", { email, phone, password });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="signup-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
