import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import Practice from './pages/practice.jsx';
import About from "./pages/about.jsx";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
