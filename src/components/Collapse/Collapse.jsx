import React, { useState } from 'react'
import useCollapse from 'react-collapse'
import './collapse.css'

const Collapse = () => {
  const [isOpen, setOpen] = useState(false)
  const { getCollapsProps, getToggleProps } = useCollapse({ isOpen })
  function handleOnClick() {
    setOpen(!isOpen)
  }
  return (
    <div className="collapse">
      <div
        className="header__collapse"
        {...getToggleProps({ onclick: handleOnClick })}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </div>
      <div {...getCollapsProps()}>
        <div className="content__collapse">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>
    </div>
  )
}

export default Collapse
