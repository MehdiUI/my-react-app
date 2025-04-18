import React from 'react'
import Card from './Card'
import '../Styles/Card.sass'

function CardList({ data, urlPath = "logement" }) {
  return (
    <div className="container-card">
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card 
            key={item.id} 
            id={item.id} 
            cover={item.cover} 
            title={item.title}
            urlPath={urlPath}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList