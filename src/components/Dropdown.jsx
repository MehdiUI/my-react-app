import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Dropdown.sass'

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown