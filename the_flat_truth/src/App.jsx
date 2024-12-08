import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import FlatEarthFacts from './pages/FlatEarthFacts';



function App() {
  return (
    <Router>
      <Navbar />

      <div className="bg-blue-500 text-white p-4"> Hello World! tailwind css </div>
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



export default App;
