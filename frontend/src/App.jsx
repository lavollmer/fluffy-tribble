import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import Practice from './pages/practice.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/practice" component={Practice} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
