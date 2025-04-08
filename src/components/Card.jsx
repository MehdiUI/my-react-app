import React from 'react'
import '../Styles/Card.sass'
import data from '../datas/Product.json'
import { Link } from 'react-router-dom'


function Card() {
    return (<div className="container-card">
        <div className="cards-wrapper">
        {data.map((item) => (
          <Link key={item.id} to={`/logement/${item.id}`} className="card-link">
            <div className="card">
            <img src={item.cover} alt={item.title} className="card__image" />
            <div className="card__overlay"></div>
            <h2 className="card__title">{item.title}</h2>
           </div>
          </Link>
))}

        </div>
      </div>)
}

export default Card
