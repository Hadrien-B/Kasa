import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Nav = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
