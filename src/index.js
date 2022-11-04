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
          <Route path='/' element={<Gallery />} />  {/* Route vers la page accueil */}
          <Route path='/logement/:id' element={<Logement />} /> {/* Route vers la page logement selon l'id sélectionnée */}
          <Route path='/about' element={<About />} /> {/* Route vers la page A propos */}
          <Route path='/*' element={<Error />} /> {/* Route vers la page 404 si le chemin demandé n'existe pas */}
        </Routes>
        </div>
      <Footer />
    </div>
    </Router>
  </React.StrictMode>
)
