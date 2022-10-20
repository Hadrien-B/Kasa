import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './pages/Banner/banner';
import Logement from './pages/Logements/logement';
import About from './pages/About/about';
import Error from './pages/Error/error';
import Footer from './components/Footer/Footer'

const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      
        <Banner />
        <Logement />
      
        <Footer />
      
    </BrowserRouter>
  </React.StrictMode>
)
