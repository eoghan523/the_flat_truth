import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';



function app() {

  return (
    <Router>
      <Navbar />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />

    </Router>
  )
}
