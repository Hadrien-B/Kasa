import React from 'react'
import './error.css' //Importation du style

const Error = () => {
  return (
    <div>
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
