// Import Firebase libraries
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO1prGq3oQiJ2P92SwCF3L3QlcwHJY2To",
  authDomain: "green-market-7872b.firebaseapp.com",
  projectId: "green-market-7872b",
  storageBucket: "green-market-7872b.firebasestorage.app",
  messagingSenderId: "659801733226",
  appId: "1:659801733226:web:697fc24a22884ce2fa3213"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = app.auth();
const db = app.firestore();
const storage = app.storage();

export { auth, db, storage };

