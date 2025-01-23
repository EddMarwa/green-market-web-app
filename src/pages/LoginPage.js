// src/pages/LoginPage.js
import React from 'react';
import { auth } from '../firebase/firebase';  // Import Firebase auth
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();  // For redirection after login

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Redirect to dashboard after login
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  };

  return (
    <div className="login-page">
      <h1>Welcome to Green Market</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your Email" required />
        <input type="password" name="password" placeholder="Enter your Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
