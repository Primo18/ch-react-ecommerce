import '../Item/Item.css'
import './ItemDetail.css';
import { toast } from 'sonner';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, nombre, imagen, description, precio, stock }) => {
    const [quantity, setCount] = useState(1);
    const { addItem } = useCartContext();
    const [flag, setFlag] = useState(false);

    const handleAdd = () => {
        if (quantity < stock) {
            setCount(quantity + 1);
        }
    };

    const handleSubstract = () => {
        if (quantity > 1) {
            setCount(quantity - 1);
        }
    };

    const handleOnAdd = () => {
        addItem({ id, nombre, imagen, precio, stock }, quantity);
        setFlag(true);
        toast.success('Producto agregado al carrito');
    };

    return (
        <div className="producto">
            <div className="producto__img">
                <img src={import.meta.env.BASE_URL + imagen} alt={nombre} />
            </div>
            <h3 className="producto__nombre">{nombre}</h3>
            <p className="producto__stock">Stock: {stock} UN</p>
            <p className="producto__precio">Precio: ${precio}</p>
            <p className="producto__description">{description}</p>
            {
                flag
                    ?
                    <Link to="/cart"><button className='button-finish'>Terminar mi compra</button></Link>
                    :
                    <ItemCount count={quantity} handleAdd={handleAdd} handleSubstract={handleSubstract} handleOnAdd={handleOnAdd} />
            }
        </div>
    );
};

export default ItemDetail;