// src/pages/AddProduct.js
import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { storage } from "../firebase"; // Firebase storage initialization
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const db = getFirestore();
  const auth = getAuth();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !image) {
      alert("All fields are required.");
      return;
    }

    const storageRef = ref(storage, `products/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(collection(db, "products"), {
      name,
      description,
      price,
      imageUrl,
      createdAt: new Date(),
      adminId: auth.currentUser.uid,
    });

    alert("Product added!");
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
