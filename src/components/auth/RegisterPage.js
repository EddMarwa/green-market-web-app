import React from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration Error:", error.message);
      });
  };

  return (
    <div className="login-page">
      <h1>Register for Green Market</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" placeholder="Enter your Email" required />
        <input type="password" name="password" placeholder="Enter your Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
