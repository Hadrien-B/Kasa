import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css' //Importation du style

//Composant 'Menu de navigation'
const Nav = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink
          to="/" //Lien vers page d'accueil
          className={({ isActive }) => (!isActive ? 'active' : 'inactive')}
        >
          <li className="nav">Accueil</li>
        </NavLink>
        <NavLink
          to="about" //Lien vers page A propos
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} //Fonction permettant de sytliser le lien lorsque la page est active
        >
          <li className="nav">A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
