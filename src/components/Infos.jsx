import React from 'react'
import '../Styles/Infos.sass'

function Infos({ title, location, tags, host, rating }) {
  const stars = [1, 2, 3, 4, 5]
  
  return (
    <div className="product__header">
      <div className="product__infos">
        <h1>{title}</h1>
        <p>{location}</p>
        <ul className="product__tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">{tag}</li>
          ))}
        </ul>
      </div>
      
      <div className="product__side">
        <div className="host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="rating">
          {stars.map((star) => (
            <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Infos