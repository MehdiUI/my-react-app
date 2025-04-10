import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../datas/Product.json'
import '../Styles/Product.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Composant Dropdown
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

function Product() {
  const { id } = useParams()
  const product = data.find(item => item.id === id)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  if (!product) return <h2>Produit introuvable</h2>
  
  const totalPictures = product.pictures.length
  const stars = [1, 2, 3, 4, 5]
  
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPictures) % totalPictures)
  }
  
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPictures)
  }
  
  return (
    <section className="product">
      {/* Galerie avec carrousel */}
      <div className="product__gallery">
        <img 
          src={product.pictures[currentIndex]} 
          alt={`${product.title} - vue ${currentIndex + 1}`} 
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
      
      {/* Header infos */}
      <div className="product__header">
        <div className="product__infos">
          <h1>{product.title}</h1>
          <p>{product.location}</p>
          <ul className="product__tags">
            {product.tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
            ))}
          </ul>
        </div>
        
        <div className="product__side">
          <div className="host">
            <p>{product.host.name}</p>
            <img src={product.host.picture} alt={product.host.name} />
          </div>
          <div className="rating">
            {stars.map((star) => (
              <span key={star} className={star <= product.rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dropdowns */}
      <div className="product__dropdowns">
        <Dropdown title="Description">
          <p>{product.description}</p>
        </Dropdown>
        
        <Dropdown title="Équipements">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {product.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </section>
  )
}

export default Product