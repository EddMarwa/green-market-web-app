import React, { useState } from "react";
import { db } from "../firebase/firebase";

const AdminPanel = () => {
  const [productName, setProductName] = useState("");

  const handleAddProduct = () => {
    db.collection("products")
      .add({ name: productName })
      .then(() => setProductName(""));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminPanel;
