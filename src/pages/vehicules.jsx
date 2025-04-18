// pages/Vehicules.jsx
import React from 'react'
import CardList from '../components/CardList'
import vehicules from '../datas/Vehicules.json'

// mapping : transforme "image" (ou "cover") en "cover"
const mapVehicule = (item) => ({
  id: item.id,
  title: item.title,
  cover: item.image || item.cover, // gère les deux cas
})

function Vehicules() {
  return (
    <div className="vehicule-page">
      <h1>Nos véhicules disponibles</h1>
      <CardList
        data={vehicules}
        urlPath="vehicule"
        mapToCardProps={mapVehicule}
      />
    </div>
  )
}

export default Vehicules
