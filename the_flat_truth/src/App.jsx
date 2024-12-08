import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import FlatEarthFacts from './pages/FlatEarthFacts'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/flatearthfacts" element={<FlatEarthFacts />} />

      </Routes>
    </Router>
  );
}
