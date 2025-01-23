import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase"; // Import Firebase storage
import { db } from "../firebase/firebase"; // Ensure this points to the correct Firebase config
import { collection, addDoc } from "firebase/firestore";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !productName || !price) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      // Create a reference to Firebase Storage
      const storageRef = ref(storage, `products/${file.name}`);
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Save product data to Firestore
      await addDoc(collection(db, "products"), {
        name: productName,
        price: parseFloat(price),
        imageUrl: downloadURL,
      });

      alert("Product uploaded successfully!");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Try again.");
    } finally {
      setLoading(false);
      setFile(null);
      setProductName("");
      setPrice("");
    }
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadImage;
