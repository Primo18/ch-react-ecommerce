import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar({ cart }) {
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
            </ul>
            <div className="nav-bar__cart">
                <CartWidget cart={cart} />
            </div>
        </nav>
    );
}

export default NavBar;
