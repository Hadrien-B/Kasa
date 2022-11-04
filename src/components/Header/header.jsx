import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/logo_Header.svg' //Import du logo
import './header.css' //Import du style
import Nav from './Nav' //Import du composant

//Composant Header (En-tête)
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <NavLink to="/">
            {' '}
            {/*Clic sur logo permet le retour à la page d'accueil*/}
            <img src={LOGO} alt="logo" className="img__logo" />
          </NavLink>
        </div>
        <Nav /> {/*Composant 'menu de navigation'*/}
      </div>
    </header>
  )
}

export default Header
