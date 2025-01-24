import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          navigate("/"); // Redirect to login if not authenticated
          return;
        }

        const userDoc = await db.collection("users").doc(user.uid).get();

        if (userDoc.exists && userDoc.data().role === "admin") {
          setIsAdmin(true);
        } else {
          alert("Access Denied. Admins only.");
          navigate("/"); // Redirect to login
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, [navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* Add Admin Panel functionality */}
    </div>
  );
};

export default AdminPanel;
