import React from 'react'
import '../Styles/Card.sass'
import Card from './Card'

function CardList({ data, urlPath = "logement", mapToCardProps }) {
  if (!data || data.length === 0) {
    return (
      <div className="container-card">
        <div className="cards-wrapper">
          <p className="no-cards-message">Aucun élément disponible</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container-card">
      <div className="cards-wrapper">
        {data.map((item) => {
          const { id, title, cover } = mapToCardProps ? mapToCardProps(item) : item

          return (
            <Card
              key={id}
              id={id}
              title={title}
              cover={cover}
              urlPath={urlPath}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardList
