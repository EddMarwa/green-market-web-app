import React from "react";
import Navbar from "../components/common/Navbar";
import LogoutButton from "../components/auth/LogoutButton";
import { useAuth } from "../components/auth/AuthContext";
import "../../styles/admin.css"; // Admin specific styles

const AdminPanel = () => {
  const { user } = useAuth();

  if (user?.email !== "admin@example.com") {
    return <p>You are not authorized to view this page.</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>Admin Panel</h2>
      <LogoutButton />
      <div className="admin-content">
        <h3>Manage Products</h3>
        {/* Add logic to manage products */}
      </div>
    </div>
  );
};

export default AdminPanel;
