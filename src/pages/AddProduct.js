// src/pages/AddProduct.js
import React, { useState } from 'react';
import { addProduct } from '../services/productService';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const product = { name, description, price };
    await addProduct(product);
    alert('Product added!');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
