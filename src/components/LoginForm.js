import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Firebase Authentication Logic
    const firebase = window.firebase;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        window.location.href = "/dashboard"; // Redirect on successful login
      })
      .catch((error) => {
        setErrorMessage(error.message); // Show error message
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img id="green-market-logo" src="green-market-logo.png" alt="Green Market Logo" />
        </div>
        <h1>Welcome to Green Market</h1>

        <div className="login-card">
          <form id="login-form" className="login-form" onSubmit={handleLogin}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
            <button type="submit">Log In</button>
          </form>
          {errorMessage && <p id="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
