import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../API/data' //Importation des données depuis le fichier data.js
import './card.css' //Importation du style

const Card = () => {
  return (
    <section className="container gallery__container">
      <div className="container__card">
        {data.map(({ id, cover, title }) => {
          /*On récupère les données de l'API*/
          return (
            <article key={id} className="gallery__card">
              {/* l'id est utilisée comme clef unique*/}
              {/*On créé un lien grâce à Link vers la page logement en utilisant l'id*/}
              <Link to={`/logement/${id}`}>
                <div className="gradient__card"></div>
                <img /*Gestion de l'image*/
                  src={cover} /*On récupère l'image du logement*/
                  alt={title}
                  className="gallery__card-image"
                />
                {/*On récupère le titre du logement*/}
                <h3>{title}</h3>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Card
