import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);

// Initialize app with immediate render
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Remove loader after app is mounted
window.addEventListener('load', () => {
  const loader = document.querySelector('.initial-loader');
  if (loader) {
    loader.addEventListener('transitionend', () => loader.remove());
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.3s ease-out';
  }
});