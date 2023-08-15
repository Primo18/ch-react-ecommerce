import './CartItem.css'

const CartItem = ({ item }) => {
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src={item.imagen} alt={item.title} />
            </div>
            <div className="cartItem__info">
                <h3 className="cartItem__title">{item.nombre}</h3>
                <p className="cartItem__price">Precio: ${item.precio}</p>
                <p className="cartItem__quantity">Cantidad: {item.quantity}</p>
            </div>
        </div>
    )
};

export default CartItem;