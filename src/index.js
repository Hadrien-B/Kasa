import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer'
import Logement from './pages/Logements/logement';
import About from './pages/About/about';
import Error from './pages/Error/error';

const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
