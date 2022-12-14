import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Logement from './pages/Logements/logement'
import About from './pages/About/about'
import Error from './pages/Error/error'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Header />
          <Routes>
            <Route exact path="/" element={<Gallery />} />
            {/* Route vers la page accueil */}
            <Route exact path="/logement/:id" element={<Logement />} />
            {/* Route vers la page logement selon l'id sélectionnée */}
            <Route exact path="/about" element={<About />} />
            {/* Route vers la page A propos */}
            <Route path="/*" element={<Error />} />
            {/* Route vers la page 404 si le chemin demandé n'existe pas */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
