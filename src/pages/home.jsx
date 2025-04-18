// home.jsx
import React from 'react'
import CardList from '../components/CardList'
import data from '../datas/Product.json'

function Home() {
  return (
    <>
      <Banner />
      <CardList data={data} urlPath="logement" />
    </>
  )
}

export default Home
