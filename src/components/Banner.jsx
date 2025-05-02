import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Banner.sass';
import bannerImageHome from '../assets/Image source 1.png'; 
import bannerImageAbout from '../assets/Image source 2.png'; 

function Banner() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/a-propos';
  
  return (
    <div className="Banner">
      <img 
        src={isAboutPage ? bannerImageAbout : bannerImageHome} 
        alt={isAboutPage ? "Paysage côtier" : "Paysage de montagne"} 
      />
      {!isAboutPage && <div className="Banner__text">Chez vous, partout et ailleurs</div>}
    </div>
  );
}

export default Banner;