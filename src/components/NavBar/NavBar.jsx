import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const cart = useContext(CartContext);
    return (
        <nav className="nav-bar">
            <div className="nav-bar__logo">
                <Link to="/"><img src="/logo.png" alt="Logo de la tienda" /></Link>
            </div>
            <ul className="navbar-menu">
                <li className='navbar-item'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active-link" : "link"}>Inicio</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/categoria/Fruta" className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                    }>Frutas</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/categoria/Verdura" className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                    }>Verduras</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/contacto" className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                    }>Contacto</NavLink>
                </li>
            </ul>
            <div className="nav-bar__cart">
                <NavLink to="/cart"><CartWidget cart={cart} /></NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
