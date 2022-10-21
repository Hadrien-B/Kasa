import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './pages/Banner/banner';
import Gallerie from './components/Gallerie/gallerie';
import Footer from './components/Footer/Footer'
import Logement from './pages/Logements/logement';
import About from './pages/About/about';
import Error from './pages/Error/error';

const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Gallerie />} />
        <Route path='/logement' element={<Logement />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
