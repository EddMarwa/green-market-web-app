import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchProductData = async () => {
      const productsRef = collection(db, 'products');
      const productSnapshot = await getDocs(productsRef);
      setProductCount(productSnapshot.docs.length);
    };

    const fetchOrderData = async () => {
      const ordersRef = collection(db, 'orders');
      const orderSnapshot = await getDocs(ordersRef);
      setOrderCount(orderSnapshot.docs.length);
    };

    fetchProductData();
    fetchOrderData();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-summary">
          <DashboardCard title="Total Products" value={productCount} icon="product-icon" />
          <DashboardCard title="Total Orders" value={orderCount} icon="order-icon" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
