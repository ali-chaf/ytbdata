// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have a global CSS file
import App from './App';

const rootElement = document.getElementById('root');

// Ensure rootElement is not null before creating the root
if (!rootElement) {
  throw new Error('Failed to find the root element. Make sure there is a <div id="root"> in your index.html.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);