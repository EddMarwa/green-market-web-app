// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // For Authentication
import { getFirestore } from "firebase/firestore";  // For Firestore
import { getStorage } from "firebase/storage";  // For Firebase Storage

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

// Initialize Firebase Authentication, Firestore, and Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services to be used in other parts of the app
export { auth, db, storage };
