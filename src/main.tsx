import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Single Page Apps for GitHub Pages
// Handle redirect from 404.html
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  const newUrl = window.location.pathname + redirect + window.location.hash;
  window.history.replaceState(null, '', newUrl);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
