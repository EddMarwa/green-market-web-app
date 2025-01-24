import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const ProtectedRoute = ({ element, isAdmin }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/" />;
  }

  if (isAdmin && user.email !== "admin@example.com") {
    return <Navigate to="/products" />;
  }

  return element;
};

export default ProtectedRoute;
