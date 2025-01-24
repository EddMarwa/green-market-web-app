import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../firebase/firebase'; // Firebase import
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user information in Firestore (you can modify the fields as needed)
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user', // default user role
      });

      console.log('User registered:', user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <button type="submit">Register</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
