import React from 'react'
import '../Styles/Card.sass'
import { Link } from 'react-router-dom'

// Composant Card pour une carte
function Card({ item, urlPath = "logement" }) {
  // Vérification de sécurité pour s'assurer que les propriétés nécessaires existent
  if (!item || !item.id || !item.cover || !item.title) {
    console.warn("Card component: missing required properties (id, cover, or title)");
    return null;
  }

  return (
    <Link to={`/${urlPath}/${item.id}`} className="card-link">
      <div className="card">
        <img src={item.cover} alt={item.title} className="card__image" />
        <div className="card__overlay"></div>
        <h2 className="card__title">{item.title}</h2>
      </div>
    </Link>
  );
}

export default Card