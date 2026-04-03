import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Single Page Apps for GitHub Pages
// Handle redirect from 404.html
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  // Use replaceState to update the URL without adding to history
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  window.history.replaceState(null, '', base + redirect + window.location.hash);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
