// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.sass';

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <div className="error-code">404</div>
        <div className="error-message">Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className="home-button">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default NotFound;