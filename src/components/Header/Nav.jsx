import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Nav = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink to="/">
          <li className="nav">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="nav">A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
