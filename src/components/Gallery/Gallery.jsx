import React from 'react'
import './gallery.css' //Importation du style
import Banner from '../Banner/Banner' //Importation du composant Banner (Bannière)
import Card from '../Card/Card' //Importation du composant Card (Vignette logement)

const Gallerie = () => {
  //Composant Galerie
  return (
    <div>
      {/*On 'wrappe' nos composants banner et card afin de les intégrer à la page*/}
      <Banner />
      <Card />
    </div>
  )
}

export default Gallerie
