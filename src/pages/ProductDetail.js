import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const db = getFirestore();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [productId]);

  const handleBuy = (product) => {
    // Logic for handling the purchase
    console.log("Buying product:", product);
    // Redirect to checkout or update Firestore
  };

  const handleRent = (product) => {
    // Logic for handling the rental
    console.log("Renting product:", product);
    // Redirect to checkout or update Firestore
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
          <button onClick={() => handleBuy(product)}>Buy</button>
          <button onClick={() => handleRent(product)}>Rent</button>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetail;
