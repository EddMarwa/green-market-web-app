import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/user">Dashboard</Link>
          {user.email === "admin@example.com" && <Link to="/admin">Admin Panel</Link>}
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
