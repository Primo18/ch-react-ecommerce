import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

// Este componente muestra la aplicación principal
function App() {
  // Aquí debes obtener el estado del carrito desde un contexto o un estado global
  const cart = [
    { id: 1, name: 'Producto A', price: 1000, quantity: 2 },
    { id: 2, name: 'Producto B', price: 2000, quantity: 1 },
    { id: 3, name: 'Producto C', price: 3000, quantity: 3 },
  ];

  return (
    <>
      <NavBar cart={cart} />
      <ItemListContainer greeting="Bienvenido a Feria Libre Digital" />
      <Footer />
    </>
  );
}

export default App;
