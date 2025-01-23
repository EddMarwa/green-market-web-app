import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
