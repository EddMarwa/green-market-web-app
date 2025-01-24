import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ element, adminRequired = false }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminRequired && user.email !== "admin@example.com") {
    return <Navigate to="/" />; // Redirect non-admin users
  }

  return element;
};

export default ProtectedRoute;
