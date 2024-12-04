// src/Register.js
import React, { useState } from 'react';
import { registerUser } from './loginregister'; // Import register function from loginregister.js
import styles from './authstyle.module.css'; // Import styles for the register page

function Register() {
  // State for storing input values and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle register form submission
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      await registerUser(email, password); // Call the registerUser function from loginregister.js
      alert('You have registered successfully!');
      window.location.href = '/home'; // Redirect to home page after successful registration
    } catch (err) {
      setError(err.message); // Set the error message in case of failure
    }
  };

  return (
    <div className={styles['auth-container']}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>} {/* Display error message if exists */}
      <div className={styles['form-group']}>
        <input
          type="email"
          id="register-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
      </div>
      <div className={styles['form-group']}>
        <input
          type="password"
          id="register-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
      </div>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
  );
}

export default Register;
