// src/App.tsx
import React from 'react'; // Keep this import for clarity, though react-jsx transform doesn't strictly require it in React 17+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;