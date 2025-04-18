import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Carrousel.sass'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalPictures = pictures.length
  
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPictures) % totalPictures)
  }
  
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPictures)
  }
  
  return (
    <div className="product__gallery">
      <img 
        src={pictures[currentIndex]} 
        alt={`Vue ${currentIndex + 1}`} 
        className="gallery__image"
      />
      
      {totalPictures > 1 && (
        <>
          <button className="gallery__nav gallery__nav--prev" onClick={goPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="gallery__nav gallery__nav--next" onClick={goNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="gallery__counter">
            {currentIndex + 1}/{totalPictures}
          </div>
        </>
      )}
    </div>
  )
}

export default Carrousel
