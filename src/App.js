// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Login } from './components/Login/login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App;
