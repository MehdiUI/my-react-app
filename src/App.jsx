import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import Product from './components/Product';
import NotFound from './pages/notFound';
import Nav from './components/Nav';
import Banner from './components/Banner';
import CardList from './components/CardList';
import Footer from './components/Footer';
import data from './datas/Product.json'
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
              <CardList data={data} />
            </>
          }
        />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/vehicule" element={<Vehicules/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;