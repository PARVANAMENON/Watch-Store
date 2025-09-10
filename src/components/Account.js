import React, { useState } from 'react';
import './Account.css';
import Signin from './Signin';
import Signup from './Signup';

const Account = ({ user: propUser }) => {
  const [user, setUser] = useState(propUser || null);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignin = (userData) => setUser(userData);
  const handleSignup = (userData) => setUser(userData);

  if (!user) {
    return (
      <div className="account-container">
        <div className="account-toggle">
          <button
            className={!showSignup ? 'active' : ''}
            onClick={() => setShowSignup(false)}
          >
            Sign In
          </button>
          <button
            className={showSignup ? 'active' : ''}
            onClick={() => setShowSignup(true)}
          >
            Sign Up
          </button>
        </div>
        {showSignup ? (
          <Signup onSignup={handleSignup} />
        ) : (
          <Signin onSignin={handleSignin} />
        )}
      </div>
    );
  }

  return (
    <div className="account-container">
      <h2>Account Page</h2>
      <p>Welcome, {user.email || 'User'}!</p>
      <button className="signout-btn" onClick={() => setUser(null)}>
        Sign Out
      </button>
    </div>
  );
};

export default Account;