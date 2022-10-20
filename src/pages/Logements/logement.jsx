import React from 'react'
import './logement.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { data } from '../../API/data'

const Logement = () => {
  return (
    <section className="container gallery__container">
      {data.map(({ id, cover, title }) => {
        return (
          <NavLink to={`/logement/${data.id}`}>
            <article key={id} className="gallery__card">
              <div>
                <img src={cover} alt={title} className="gallery__card-image" />
              </div>
              <h3>{title}</h3>
            </article>
          </NavLink>
        )
      })}
    </section>
  )
}

export default Logement
