// Product.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Product.sass'

// Import des composants séparés
import Carrousel from '../components/Carrousel'
import Infos from '../components/Infos'
import Dropdown from '../components/Dropdown'

function Product({ data, type }) {
  const { id } = useParams()

  // Recherche de l'élément (produit ou véhicule) par ID
  const item = data.find(item => item.id === id)

  if (!item) return <h2>{type} introuvable</h2>  // Si l'élément n'existe pas
  
  return (
    <section className="product">
      {/* Carrousel d'images */}
      <Carrousel pictures={item.pictures || item.images} />
      
      {/* Informations de l'élément (produit ou véhicule) */}
      <Infos 
        title={item.title}
        location={item.location}
        tags={item.tags}
        host={item.host}
        rating={item.rating}
      />
      
      {/* Sections dépliables */}
      <div className="product__dropdowns">
        <Dropdown title="Description">
          <p>{item.description}</p>
        </Dropdown>
        
        <Dropdown title="Équipements">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {item.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </section>
  )
}

export default Product
