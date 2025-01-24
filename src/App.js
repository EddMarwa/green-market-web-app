import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext"; // Auth context provider
import ProtectedRoute from "./components/auth/ProtectedRoute"; // Route protection
import Navbar from "./components/common/Navbar"; // Navbar for all users
import Footer from "./components/common/Footer"; // Footer for all users
import LoginPage from "./components/auth/LoginPage"; // Login page component
import RegisterPage from "./components/auth/RegisterPage"; // Register page component
import AdminPanel from "./components/admin/AdminPanel"; // Admin panel component
import UserDashboard from "./components/user/UserDashboard"; // User dashboard component
import ProductList from "./components/user/ProductList"; // Product list page for users
import ProductDetail from "./components/user/ProductDetail"; // Product detail page for users
import NotFound from "./pages/NotFound"; // 404 Page

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Show navbar for all pages */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} /> {/* Home page for product list */}
            <Route path="/login" element={<LoginPage />} /> {/* Login page */}
            <Route path="/register" element={<RegisterPage />} /> {/* Register page */}
            
            {/* Protected routes for admin and user */}
            <Route
              path="/user"
              element={<ProtectedRoute element={<UserDashboard />} />}
            />
            <Route
              path="/admin"
              element={<ProtectedRoute adminRequired={true} element={<AdminPanel />} />}
            />
            
            {/* Product details page */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* 404 page for non-existent routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer /> {/* Show footer for all pages */}
      </Router>
    </AuthProvider>
  );
}

export default App;
