import React, { useState } from 'react'
import './carousel.css'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'

export default function Carousel(props) {
  const pictures = props.pictures
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    slide === pictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
  }
  const prevSlide = () => {
    slide === 0 ? setSlide(pictures.length - 1) : setSlide(slide - 1)
  }
  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div className="arrows">
          <img
            src={ArrowLeft}
            onClick={prevSlide}
            className="arrow left"
            alt="flèche gauche"
          />
          <img
            src={ArrowRight}
            onClick={nextSlide}
            className="arrow right"
            alt="flèche droite"
          />
        </div>
      )}
      <img
        src={pictures[slide]}
        key={slide}
        alt={slide}
        className="img__carousel"
      />
    </div>
  )
}
