import React from 'react';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import Practice from './pages/practice.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
