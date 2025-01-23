// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO1prGq3oQiJ2P92SwCF3L3QlcwHJY2To",
  authDomain: "green-market-7872b.firebaseapp.com",
  projectId: "green-market-7872b",
  storageBucket: "green-market-7872b.firebasestorage.app",
  messagingSenderId: "659801733226",
  appId: "1:659801733226:web:697fc24a22884ce2fa3213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

