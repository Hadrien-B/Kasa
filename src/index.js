import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Routes';


const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
