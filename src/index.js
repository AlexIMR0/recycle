// Import React library, index.css, and App.js files

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// Starting point for rendering React component tree
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the components on the screen
root.render(
  <React.StrictMode>
  // Enables client-side routing in application/lets user navigate page without reloading page
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

