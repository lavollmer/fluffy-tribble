import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('Hello from main.jsx')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);