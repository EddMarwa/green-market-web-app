import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Green Market</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/products">Manage Products</Link></li>
          <li><Link to="/orders">Manage Orders</Link></li>
          <li><Link to="/users">Manage Users</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
