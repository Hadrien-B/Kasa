import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer'
import Logement from './pages/Logements/logement';
import About from './pages/About/about';
import Error from './pages/Error/error';
import Header from './components/Header/Header';

const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <React.StrictMode>
    <Router>
    <div className='App'>
      <div className='main'>
      <Header />
        <Routes>
          <Route path='/' element={<Gallery />} />
          <Route path='/logement/:id' element={<Logement />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        </div>
      <Footer />
    </div>
    </Router>
  </React.StrictMode>
)
