import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Success.css'; 
import FacultyForm from './FacultyForm';

function Success() {
  const location = useLocation();
  const { user } = location.state || {};
  console.log('User:', user);
  return (
    <div className="success-container">
      <div className="header">
        <h1>Faculty Performance Appraisal System</h1>
      </div>
      <div className="title">
        <h2>APs with more than Two Years of Experience</h2>
      </div>
      {user && (
        <div className="details-container">
          <div className="row">
            <div className='det-cont'>
              <label>User ID</label>
              <span>{user.userid || 'N/A'}</span>
            </div>
            <br></br>
            <div className='det-cont'>
              <label>Name</label>
              <span>{user.name || 'N/A'}</span>
            </div>
            <br></br>
            <div className='det-cont'>
              <label>Dept</label>
              <span>{user.department || 'N/A'}</span>
            </div>
            <br></br>
            <div className='det-cont'>
              <label>Designation</label>
              <span>{user.designation || 'N/A'}</span>
            </div>
          </div>
        </div>
      )}
      <div className="footer">
        <Link to="/">Go Back to Login</Link>
      </div>

      <FacultyForm user={user }/>
    </div>
  );
}

export default Success;
