// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Product from './components/Product';
import NotFound from './pages/notFound';
import Vehicules from './pages/vehicules';
import Nav from './components/Nav';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import data from './datas/Product.json'; // Données des produits
import vehicules from './datas/Vehicules.json'; // Données des véhicules
import './Styles/App.sass';
import './Styles/Banner.sass';

function App() {
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
        
        {/* Page produit */}
        <Route
          path="/logement/:id"
          element={<Product data={data} type="Produit" />}
        />
        
        {/* Page véhicule */}
        <Route
          path="/vehicule/:id"
          element={<Product data={vehicules} type="Véhicule" />}
        />
        
        {/* Page des véhicules */}
        <Route path="/vehicule" element={<Vehicules />} />
        
        {/* Page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
