import React, { useState } from 'react'
import './collapse.css' //Importation du style
import ArrowUp from '../../assets/ArrowUp.png'
import ArrowDown from '../../assets/ArrowDown.png'

function Collapse({ title, description }) {
  //Composant collapse
  const [isOpen, setIsOpen] = useState(false) //Hook d'état
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
