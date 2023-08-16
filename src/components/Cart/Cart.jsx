import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clear, getTotalPrice } = useCartContext();

    return (
        <div className="cart-container">
            <h2 className="cart__title">Carrito</h2>
            {cart.length === 0 ? (
                <div className="cart__empty">
                    <p>No hay productos en el carrito</p>
                </div>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="cart__total">
                        <p>Total: ${getTotalPrice()}</p>
                    </div>
                    <div className="cart__buttons">
                        <button className="cart__button" onClick={clear}>
                            Vaciar carrito
                        </button>
                        <Link to='/checkout' ><button className="cart__button">Finalizar compra</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
