import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import { loginUser } from './loginregister'; 
import styles from './authstyle.module.css';
   // Assuming you already have this function

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async () => {
    try {
      // Call your login function from loginregister.js
      await loginUser(email, password);
      alert('Login successful!');
      navigate('/MainHome'); // Redirect to home page on successful login
    } catch (error) {
      alert('Login failed: ' + error.message); // Handle login failure
    }
  };

  return (
    <div className={styles['auth-container']}>
      <h2>Login</h2>
      <div className={styles['form-group']}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className={styles['form-group']}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}
