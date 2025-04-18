import React from 'react';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import vehiculesData from '../datas/Vehicules.json';


function Vehicules() {
  return (
    <main className="vehicules-page">
      <Banner />
      <h1 className="vehicules-title">Nos véhicules disponibles</h1>
      <CardList data={vehiculesData} urlPath="vehicule" />
    </main>
  );
}

export default Vehicules;