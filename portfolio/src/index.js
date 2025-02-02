import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Import global CSS here
import App from './layouts/App'; // Adjust path if App.js is in src/layouts

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
