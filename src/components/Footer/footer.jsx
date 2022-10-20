import React from 'react'
import logo from '../../assets/logo_Footer.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo Kasa" className="footer__logo" />
      <p className="text__footer">© 2020 Kasa, ALl rigths reserved</p>
    </div>
  )
}

export default Footer
