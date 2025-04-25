// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Product from './components/Product';
import NotFound from './pages/notFound';
import Vehicules from './pages/Vehicules';
import Nav from './components/Nav';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import data from './datas/Product.json'; // Données des produits
import vehicules from './datas/Vehicules.json'; // Données des véhicules
import './Styles/App.sass';
import './Styles/Banner.sass';

function App() {
  // Mapping pour les véhicules qui doivent être affichés sur la page d'accueil
  const VehiculesMapping = {
    id: 'id',
    title: 'title',
    cover: (item) => item.cover || item.image
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <CardList data={data} urlPath="logement" />
            </>
          }
        />
        <Route path="/a-propos" element={<About />} />
        
    
        <Route
          path="/logement/:id"
          element={<Product data={data} type="Produit" />}
        />
        
       
        <Route path="/vehicule" element={<Vehicules />} />
        
        {/* Ensuite la route avec paramètre */}
        <Route
          path="/vehicule/:id"
          element={<Product data={vehicules} type="Véhicule" />}
        />
        
     
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;