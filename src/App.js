import React from "react";
import { auth, db, storage } from './firebase/firebase'; // Adjust the path if necessary
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes, not Switch
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes here instead of Switch */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
