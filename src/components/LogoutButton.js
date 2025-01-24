import React from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
