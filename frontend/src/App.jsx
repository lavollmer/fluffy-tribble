import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import Practice from './pages/practice.jsx';
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Signup from "./pages/signup.jsx";

function App() {
  return (
    <div className="bg-custom-primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
