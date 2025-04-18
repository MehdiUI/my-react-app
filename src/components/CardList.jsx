import React from 'react'
import '../Styles/Card.sass'
import Card from './Card'

function CardList({ data, urlPath = "logement" }) {
  // Vérification pour éviter les erreurs si data est undefined ou vide
  if (!data || data.length === 0) {
    return (
      <div className="container-card">
        <div className="cards-wrapper">
          <p className="no-cards-message">Aucun élément disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-card">
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card 
            key={item.id || Math.random().toString(36)}
            item={item}
            urlPath={urlPath}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;