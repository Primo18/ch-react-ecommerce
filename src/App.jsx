import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Este componente muestra la aplicación principal
function App() {
  // Aquí debes obtener el estado del carrito desde un contexto o un estado global
  const cart = [
    { id: 1, name: 'Producto A', price: 1000, quantity: 2 },
    { id: 2, name: 'Producto B', price: 2000, quantity: 3 },
    { id: 3, name: 'Producto C', price: 3000, quantity: 3 },
  ];

  return (
    <>
      <BrowserRouter>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Feria Libre Digital" />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Bienvenido a Feria Libre Digital" />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
