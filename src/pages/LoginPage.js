import React from 'react';
import LoginForm from '../components/LoginForm'; // Import the LoginForm component
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();  // For redirection after login

  return (
    <div className="login-page">
      <h1>Welcome to Green Market</h1>
      <LoginForm />  {/* Use the LoginForm component */}
    </div>
  );
};

export default LoginPage;
