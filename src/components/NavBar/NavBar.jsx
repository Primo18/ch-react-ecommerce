import './NavBar.css';
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({ cart }) {

    const categories = ['Frutas', 'Verduras', 'Ofertas', 'Recetas'];

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // agregar la lógica adicional para manejar la categoría seleccionada
    };

    return (
        <div className="nav-bar">
            <div className="nav-bar__logo">
                <img src="/logo.png" alt="Logo de la tienda" />
            </div>
            <ul className="navbar-menu">
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`navbar-item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div className="nav-bar__cart">
                <CartWidget cart={cart} />
            </div>
        </div>
    );
}

export default NavBar;
