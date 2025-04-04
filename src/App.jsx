import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Housing from './pages/housing';
import NotFound from './pages/notFound';
import Nav from './components/Nav';
import './Styles/App.sass'

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Housing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
