import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, stock, imagen }) => {
    return (
        <div className="producto">
            <div className="producto__img">
                <img src={import.meta.env.BASE_URL + imagen} alt={nombre} />
            </div>
            <h3 className="producto__nombre">{nombre}</h3>
            <p className="producto__stock">Stock: {stock} UN</p>
            <p className="producto__precio">Precio: ${precio}</p>
            <Link to={`/item/${id}`} ><button className="producto__button" >Ver Detalles</button></Link>
        </div>
    );

};

export default Item;