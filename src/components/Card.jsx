import React from 'react'
import '../Styles/Card.sass'
import { Link } from 'react-router-dom'

function Card(props) {
  const { data, urlPath = "logement" } = props;
  // J'ajoute un paramètre urlPath avec "logement" comme valeur par défaut
  // pour maintenir la compatibilité avec le code existant
  
  return (
    <div className="container-card">
      <div className="cards-wrapper">
        {data.map((item) => (
          <Link key={item.id} to={`/${urlPath}/${item.id}`} className="card-link">
            <div className="card">
              <img src={item.cover} alt={item.title} className="card__image" />
              <div className="card__overlay"></div>
              <h2 className="card__title">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Card