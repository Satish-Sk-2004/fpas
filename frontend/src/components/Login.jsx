// src/components/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!userid || !password) {
      alert('Please enter both userid and password.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        userid,
        password,
      });
      const {experience} = response.data.user;
      console.log(experience);
      if (response.status === 200) {
        // Navigate to Success page
        navigate('/success', { state: { user: response.data.user } });
        if(experience === 3){
          navigate('/success', { state: { user: response.data.user } });
        }
        
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Navigate to Failure page
        navigate('/failure');
      } else {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User ID"
            className="input-field"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {/* Optional: Forgot Password Link */}
        {/* <p className="forgot-password">
          Forgot Password? <a href="#">Click to reset</a>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
