import React, { useEffect, useState } from "react";
import { db, auth } from "/Users/EddX/Documents/Github/React/green-market/src/firebase/firebase";
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
      <p>Admin features will be displayed here.</p>
    </div>
  );
};

export default AdminPanel;
