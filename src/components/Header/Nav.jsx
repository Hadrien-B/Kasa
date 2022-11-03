import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'

const Nav = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink tag={Link} to="/">
          <li className="nav">Accueil</li>
        </NavLink>
        <NavLink tag={Link} to="/about">
          <li className="nav">A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
