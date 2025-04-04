import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Housing from './pages/housing';
import NotFound from './pages/notFound';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Card from './components/Card';
import './Styles/App.sass'
import './Styles/Banner.sass'

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Banner/>
    <Card />
    <Routes>
      
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Housing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
