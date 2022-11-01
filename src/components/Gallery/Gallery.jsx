import React from 'react'
import './gallery.css'
import { Link } from 'react-router-dom'
import { data } from '../../API/data'
import Banner from '../Banner/Banner'

const Gallerie = () => {
  return (
    <div>
      <Banner />
      <section className="container gallery__container">
        {data.map(({ id, cover, title }) => {
          return (
            <div className="container__card">
              <article key={data.id} className="gallery__card">
                <Link to={`/logement/${id}`}>
                  <div className="gradient__card"></div>
                  <img
                    src={cover}
                    alt={title}
                    className="gallery__card-image"
                  />
                  <h3>{title}</h3>
                </Link>
              </article>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Gallerie
