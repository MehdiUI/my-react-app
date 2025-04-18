import React from 'react'; 
import '../Styles/Card.sass'; 
import { Link } from 'react-router-dom'; 

function Card({ id, cover, title, urlPath = "logement" }) { 
  return ( 
    <Link to={`/${urlPath}/${id}`} className="card-link"> 
      <div className="card"> 
        <img src={cover} alt={title} className="card__image" /> 
        <div className="cardoverlay"></div> 
        <h2 className="card__title">{title}</h2> 
      </div> 
    </Link> 
  ); 
} 

export default Card;