import React, { useState } from 'react';
import './Signin.css';
import './Tracking'
import { useNavigate } from 'react-router-dom';

  
const Signin = ({ onSignin }) => {
     const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    if (onSignin) onSignin({ email });
    navigate('/tracking');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-title">Sign In</h2>
        {error && <div className="signin-error">{error}</div>}
        <input
          type="email"
          className="signin-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="signin-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="signin-btn" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;