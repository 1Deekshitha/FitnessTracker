import React, { useState } from 'react';
import { registerUser } from './loginregister';
import styles from './authstyle.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // ✅ Add this line

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      await registerUser(email, password);
      alert('You have registered successfully!');
      navigate('/MainHome'); // ✅ Now this will work
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles['auth-container']}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <div className={styles['form-group']}>
        <input
          type="email"
          id="register-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <input
          type="password"
          id="register-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
