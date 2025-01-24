import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
