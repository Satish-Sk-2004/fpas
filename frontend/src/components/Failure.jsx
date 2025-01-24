// src/components/Failure.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Failure() {
  return (
    <div className="message-container">
      <h2>Invalid User ID or Password</h2>
      <p>Please check your credentials and try again.</p>
      <Link to="/">Go Back to Login</Link>
    </div>
  );
}

export default Failure;
