// vehicules.jsx
import React from 'react'
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import data from '../datas/Vehicules.json'

function Vehicules() {
  // Mapping pour le format des véhicules
  // Certains véhicules utilisent 'image', d'autres 'cover'
  const vehiculesMapping = (item) => ({
    id: item.id,
    title: item.title,
    cover: item.cover || item.image
  });

  return (
    <>
      <Banner />
      <CardList 
        data={data} 
        urlPath="vehicule" 
        mapToCardProps={vehiculesMapping}
      />
    </>
  )
}

export default Vehicules