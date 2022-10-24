import React from 'react'
import Header from '../../components/Header/Header'
import './error.css'

const Error = () => {
  return (
    <div>
      <Header />
      <main className="container container__error">
        <div className="error">404</div>
        <div className="message__error">
          Oups ! La page que vous demandez n'existe pas
        </div>
        <div className="link__error">
          <a href="/">Retourner sur la page d'accueil</a>
        </div>
      </main>
    </div>
  )
}

export default Error
