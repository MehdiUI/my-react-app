import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../datas/Product.json'
import '../Styles/Product.sass'

// Import des composants séparés
import Carrousel from '../components/Carrousel'
import Infos from '../components/Infos'
import Dropdown from '../components/Dropdown'

function Product() {
  const { id } = useParams()
  const product = data.find(item => item.id === id)
  
  if (!product) return <h2>Produit introuvable</h2>
  
  return (
    <section className="product">
      {/* Carrousel d'images */}
      <Carrousel pictures={product.pictures} />
      
      {/* Informations du logement */}
      <Infos 
        title={product.title}
        location={product.location}
        tags={product.tags}
        host={product.host}
        rating={product.rating}
      />
      
      {/* Sections dépliables */}
      <div className="product__dropdowns">
        <Dropdown title="Description">
          <p>{product.description}</p>
        </Dropdown>
        
        <Dropdown title="Équipements">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {product.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </section>
  )
}

export default Product