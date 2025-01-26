// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import Failure from './components/Failure';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure Font Awesome is imported
// import Years3 from './components/years3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success/" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        {/* <Route path="/years3" element={<Years3/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
