import React from 'react'
import { useParams } from 'react-router-dom'
import './logement.css'
import Collapse from '../../components/Collapse/Collapse'
import Stars from '../../components/Stars/Stars'
import Tag from '../../components/Tag/Tag'
import Carousel from '../../components/Carousel/Carousel'
import { data } from '../../API/data'

export default function Logement() {
  const { id } = useParams()
  const apartment = data.find((item) => item.id === id)
  const { title, location, rating, host, equipments, description, pictures } =
    apartment

  return (
    <div className="container container__apartment">
      <Carousel pictures={pictures} className />
      <section className="container description__appartement">
        <h1 className="title__apartment">{title}</h1>
        <div className="location__apartment">{location}</div>
        <div className="tags">
          {apartment.tags.map((tag, index) => (
            <Tag tag={tag} key={index} />
          ))}
        </div>

        <div className="info__apartment">
          <div className="host">
            <div>{host.name}</div>
            <img src={host.picture} className="img__host" alt={host.name} />
          </div>
          <Stars rating={parseInt(rating)} />
        </div>
      </section>
      <div className="container container__collapse">
        <Collapse
          title="Description"
          description={description}
          className="collapse__apartment"
        />
        <Collapse
          title="Equipements"
          description={equipments}
          className="collapse__apartment"
        />
      </div>
    </div>
  )
}
