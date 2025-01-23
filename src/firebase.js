// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO1prGq3oQiJ2P92SwCF3L3QlcwHJY2To",
  authDomain: "green-market-7872b.firebaseapp.com",
  projectId: "green-market-7872b",
  storageBucket: "green-market-7872b.appspot.com", // Corrected storageBucket URL
  messagingSenderId: "659801733226",
  appId: "1:659801733226:web:697fc24a22884ce2fa3213",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Storage
