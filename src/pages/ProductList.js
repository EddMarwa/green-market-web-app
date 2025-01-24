import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'; // Firebase instance
import { collection, getDocs } from 'firebase/firestore';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productCollection);
      const productList = productSnapshot.docs.map(doc => doc.data());
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              className="product-image"
              src={product.imageURL}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
