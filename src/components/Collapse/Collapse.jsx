import React, { useState } from 'react'
import './collapse.css'
import ArrowUp from '../../assets/ArrowUp.png'
import ArrowDown from '../../assets/ArrowDown.png'

function Collapse({ title, description }) {
  /* Hook d'état */
  const [isOpen, setIsOpen] = useState(false)

  const handleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <article className="collapse__header" onClick={handleCollapse}>
        <h4 className="collapse__title">{title}</h4>
        <span>
          <img
            src={isOpen ? ArrowUp : ArrowDown}
            alt="flèche"
            className="collapse__arrowImg"
          />
        </span>
      </article>
      {isOpen && <div className="collapse__content">{description}</div>}
    </div>
  )
}

export default Collapse
