import React, { useState } from 'react';
import './Signup.css';



const Signup = ({ onSignup }) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError('Please fill all fields.');
      setSuccess('');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Signup successful! You can now sign in.');
    if (onSignup) onSignup({ email });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>
        {error && <div className="signup-error">{error}</div>}
        {success && <div className="signup-success">{success}</div>}
        <input
          type="email"
          className="signup-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;