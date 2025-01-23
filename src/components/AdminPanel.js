// src/components/AdminPanel.js
import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // If the user is not logged in or not an admin, redirect to login
  if (!user || !user.email.includes('admin')) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage your products, users, etc.</p>
      {/* Add your admin functionality here */}
    </div>
  );
};

export default AdminPanel;
