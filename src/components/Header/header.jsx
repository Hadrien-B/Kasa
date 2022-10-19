import React from 'react'
import LOGO from '../../assets/logo_Header.svg'
import './header.css'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
