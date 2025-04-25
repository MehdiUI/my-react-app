import React from 'react'
import '../Styles/Card.sass'
import Card from './Card'

// La fonction transformItem traite un seul élément avec le mapping fourni
const transformItem = (item, dataMapping) => {
  const result = {};
  
  // Pour chaque clé dans le mapping
  Object.keys(dataMapping).forEach(targetKey => {
    // On récupère le chemin source dans le JSON original
    const sourcePath = dataMapping[targetKey];
    
    // Si c'est une fonction, on l'exécute
    if (typeof sourcePath === 'function') {
      result[targetKey] = sourcePath(item);
    } 
    // Si c'est une chaîne, on accède à la propriété
    else if (typeof sourcePath === 'string') {
      // Support pour les chemins imbriqués comme "user.address.city"
      const value = sourcePath.split('.').reduce((obj, key) => 
        obj && obj[key] !== undefined ? obj[key] : undefined, item);
      result[targetKey] = value;
    }
  });
  
  return result;
};

function CardList({ data, urlPath = "logement", mapping }) {
  if (!data || data.length === 0) {
    return (
      <div className="container-card">
        <div className="cards-wrapper">
          <p className="no-cards-message">Aucun élément disponible</p>
        </div>
      </div>
    )
  }

  // Si un mapping est fourni, on l'utilise, sinon on utilise le mapToCardProps existant
  const processedData = data.map(item => {
    if (mapping) {
      // Transforme l'élément selon le mapping
      return transformItem(item, mapping);
    } else {
      // Conserve le comportement précédent
      return item;
    }
  });

  return (
    <div className="container-card">
      <div className="cards-wrapper">
        {processedData.map((item) => {
          const { id, title, cover } = item;

          return (
            <Card
              key={id}
              id={id}
              title={title}
              cover={cover}
              urlPath={urlPath}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardList