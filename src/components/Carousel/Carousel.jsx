import React, { useState } from 'react'
import './carousel.css' //Importation du style
import ArrowLeft from '../../assets/ArrowLeft.png' //Importation de l'image
import ArrowRight from '../../assets/ArrowRight.png' //Importation de l'image

export default function Carousel(props) {
  //Fonction du carrousel afin d'afficher les images disponibles
  const pictures = props.pictures
  const [slide, setSlide] = useState(0) /* Hook d'état */
  const nextSlide = () => {
    //Affichage l'image suivante
    slide === pictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
  }
  const prevSlide = () => {
    //Affichage l'image précédente
    slide === 0 ? setSlide(pictures.length - 1) : setSlide(slide - 1)
  }
  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div className="arrows">
          <img //Architecture de la flèche gauche
            src={ArrowLeft} //Source de l'image
            onClick={prevSlide} //Comportement au clic
            className="arrow left"
            alt="flèche gauche"
          />
          <img //Architecture de la flèche gauche droite
            src={ArrowRight} //Source de l'image
            onClick={nextSlide} //Comportement au clic
            className="arrow right"
            alt="flèche droite"
          />
        </div>
      )}
      <img //Architecture de l'image
        src={pictures[slide]} //Source de l'image affichée
        key={slide} //Clef unique
        alt={slide}
        className="img__carousel"
      />
      <div className="number__pictures">
        {/*Affichage de l'index de l'image par rapport à sa position dans le tableau*/}
        {slide + 1}/{pictures.length}{' '}
      </div>
    </div>
  )
}
