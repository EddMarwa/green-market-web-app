// src/services/productService.js
import { db } from '../firebase/firebase'; // your firebase config
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const getProducts = async () => {
  const productsCollection = collection(db, 'products');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => doc.data());
};

export const addProduct = async (product) => {
  const productsCollection = collection(db, 'products');
  await addDoc(productsCollection, product);
};
