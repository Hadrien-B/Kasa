import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/logo_Header.svg'
import './header.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <NavLink to="/">
            <img src={LOGO} alt="logo" />
          </NavLink>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
