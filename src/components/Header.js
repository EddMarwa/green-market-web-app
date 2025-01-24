import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase'; // Firebase auth for logout

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h1>Green Market</h1>
      </div>
      <div className="header-user">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
