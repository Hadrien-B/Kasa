import React from 'react'
import { useParams } from 'react-router-dom'
import './logement.css' //Importation du style
//Importation des composants
import Collapse from '../../components/Collapse/Collapse'
import Stars from '../../components/Stars/Stars'
import Tag from '../../components/Tag/Tag'
import Carousel from '../../components/Carousel/Carousel'
import { data } from '../../API/data' //Importation des données

//Fonction logement permettant de récupérer toutes les informations d'un logmement
export default function Logement() {
  const { id } = useParams() //On récupère l'id du logement grâce à useParams
  const apartment = data.find((item) => item.id === id)
  const { title, location, rating, host, description, pictures } = apartment
  const listEquipment = (equipments) => {
    //Création d'une constante récupérant la liste des équipements disponibles
    return (
      <ul className="apartment__equipments">
        {equipments.map((equipement, index) => {
          return (
            <li key={index} className="list__equipments">
              {equipement}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="container container__apartment">
      <Carousel pictures={pictures} className />{' '}
      {/*On wrappe notre composant 'carousel' en lui intégrant les images disponibles*/}
      <section className="container description__apartment">
        <div className="info__location">
          <h1 className="title__apartment">{title}</h1>
          <div className="location__apartment">{location}</div>
          <div className="tags">
            {apartment.tags.map((tag, index) => (
              <Tag tag={tag} key={index} /> //On récupère tous les tags disponibles
            ))}
          </div>
        </div>
        <div className="info__host">
          <div className="host">
            <div className="name__host">
              <div className="name__host__firstName">
                {/*On scinde le nom et le prénom de l'hôte afin d'appliquer le style attendu*/}
                {host.name.split(' ', 1)}
              </div>
              <div className="name__host__lasName">
                {host.name.split(' ').pop()}
              </div>
            </div>
            <img src={host.picture} className="img__host" alt={host.name} />
          </div>
          <Stars rating={parseInt(rating)} />
        </div>
      </section>
      <div className="container container__collapse">
        <Collapse title="Description" description={description} />
        <Collapse
          title="Equipements"
          description={listEquipment(apartment.equipments)}
        />
      </div>
    </div>
  )
}
