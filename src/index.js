import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';


const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
