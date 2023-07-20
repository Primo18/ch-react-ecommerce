import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({ cart }) {
    return (
        <div className="nav-bar">
            <div className="nav-bar__logo">
                <img src="./logo.png" alt="Logo de la tienda" />
            </div>
            <div className="nav-bar__cart">
                <CartWidget cart={cart} />
            </div>
        </div>
    );
}

export default NavBar;
