import React from 'react'
import './gallerie.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { data } from '../../API/data'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

const Gallerie = () => {
  return (
    <div>
      <Header />
      <Banner />
      <section className="container gallery__container">
        {data.map(({ id, cover, title }) => {
          return (
            <NavLink to={`/logement/${data.id}`}>
              <article key={id} className="gallery__card">
                <div className="gradient__card"></div>
                <img src={cover} alt={title} className="gallery__card-image" />
                <h3>{title}</h3>
              </article>
            </NavLink>
          )
        })}
      </section>
    </div>
  )
}

export default Gallerie
