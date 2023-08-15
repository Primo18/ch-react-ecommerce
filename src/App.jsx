import './App.css';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Feria Libre Digital" />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Bienvenido a Feria Libre Digital" />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 - Not Found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
