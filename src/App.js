import React from 'react';
import LoginPage from './LoginPage';
import { Routes, Route } from 'react-router-dom'; 
import LandingPage from './LandingPage';
import RegisterPage from './RegisterPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />  
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
      
  );
}

export default App;