// Product.jsx
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Styles/Product.sass'

// Import des composants séparés
import Carrousel from '../components/Carrousel'
import Infos from '../components/Infos'
import Dropdown from '../components/Dropdown'

function Product({ data, }) {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Recherche de l'élément (produit ou véhicule) par ID
  const item = data.find(item => item.id === id)
  
  // Rediriger vers la page 404 si l'élément n'existe pas
  useEffect(() => {
    if (!item) {
      navigate('/*', { replace: true })
    }
  }, [item, navigate])
  
  if (!item) return null
  
  return (
    <section className="product">
      
      <Carrousel pictures={item.pictures || item.images} />
      
      <Infos 
        title={item.title}
        location={item.location}
        tags={item.tags}
        host={item.host}
        rating={item.rating}
      />
      
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