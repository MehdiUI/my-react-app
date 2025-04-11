import React, { useState } from 'react';
import '../styles/About.sass';

<Banner />
const About = () => {
  // État pour gérer l'ouverture/fermeture des accordéons
  const [openAccordion, setOpenAccordion] = useState(null);

  // Fonction pour basculer l'ouverture/fermeture d'un accordéon
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  // Données des sections
  const sections = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">À propos de Kasa</h1>
        
        <div className="accordion-container">
          {sections.map((section, index) => (
            <div className="accordion" key={index}>
              <div 
                className="accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <h2>{section.title}</h2>
                <span className={`accordion-icon ${openAccordion === index ? 'open' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="white"/>
                  </svg>
                </span>
              </div>
              
              <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;