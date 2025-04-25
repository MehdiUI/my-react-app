// vehicules.jsx
import React from 'react'
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import data from '../datas/Vehicules.json'

function Vehicules() {
  // Mapping pour le format des véhicules
  // Certains véhicules utilisent 'image', d'autres 'cover'
  const vehiculesMapping = {
    id: 'id',
    title: 'title',
    // Vérifier les deux propriétés possibles pour l'image
    cover: (item) => item.cover || item.image
  };

  return (
    <>
      <Banner />
      <CardList 
        data={data} 
        urlPath="vehicule" 
        mapping={vehiculesMapping}
      />
    </>
  )
}

export default Vehicules