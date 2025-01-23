import React, { useState } from "react";
import { addProduct } from '../services/productService';
import UploadImage from '../components/UploadImage'; // Assuming this component handles image uploads

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const product = { name, description, price, imageUrl };
    await addProduct(product);
    // Optionally reset the form or redirect
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        <UploadImage setImageUrl={setImageUrl} /> {/* Component to handle image upload */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
