import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Tokens first so every variable exists before global rules consume them.
import './styles/tokens.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
