import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css' //Importation du style

const Nav = () => {
  //Composant 'Menu de navigation
  return (
    <div>
      <ul className="navigation">
        <NavLink
          to="/" //Lien vers page d'accueil
          className={({ isActive }) => (isActive ? 'active' : 'link')} //Fonction permettant de sytliser le lien
        >
          <li className="nav">Accueil</li>
        </NavLink>
        <NavLink
          to="/about" //Lien vers page A propos
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          <li className="nav">A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
