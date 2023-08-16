import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';

function CartWidget() {
    const { getTotalItems } = useCartContext();

    return (
        <div className="cart-widget" style={{ display: getTotalItems() > 0 ? "block" : "none" }} >
            <FontAwesomeIcon className='faShoppingCart' icon={faShoppingCart} />
            <span className="cart-widget__count">
                {getTotalItems()}
            </span>
        </div>
    );
}

export default CartWidget;
