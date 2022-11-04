import React from 'react'
import './banner.css' //Importation du style

const Banner = () => {
  //Composant "Bannière de la page d'accueil"
  return (
    <div>
      <section className="container banner__container">
        <div className="text__container">
          <h1 className="text__banner">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
    </div>
  )
}

export default Banner
