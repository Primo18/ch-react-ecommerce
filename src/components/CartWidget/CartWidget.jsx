import './CartWidget.css';

function CartWidget({ cart }) {

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart shopping-cart"></i>
            <span className="cart-widget__count">{totalItems}</span>
        </div>
    );
}

export default CartWidget;
