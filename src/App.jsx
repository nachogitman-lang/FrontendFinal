import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navegacion from './components/navegacion';
import Carrito from './pages/cart';
import Producto from './pages/producto';
import Footer from './components/footer';
import Contacto from './pages/contacto';
import Formulario from './pages/formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;