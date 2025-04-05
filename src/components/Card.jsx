import React from 'react'
import '../Styles/Card.sass'
import data from '../datas/Product.json'

function Card() {
    return (<div className="container-card">
        <div className="cards-wrapper">
          {data.map((item) => (
            <div key={item.id} className="card">
              <img src={item.cover} alt={item.title} className="card__image" />
              <div className="card__overlay"></div>
              <h2 className="card__title">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>)
}

export default Card
