import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Use createRoot for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
