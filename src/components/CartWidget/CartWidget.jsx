import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function CartWidget({ cart }) {

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget">
            <FontAwesomeIcon className='faShoppingCart' icon={faShoppingCart} />
            <span className="cart-widget__count">{totalItems}</span>
        </div>
    );
}

export default CartWidget;
