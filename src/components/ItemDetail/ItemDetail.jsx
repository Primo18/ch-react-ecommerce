import '../Item/Item.css'

const ItemDetail = ({ nombre, imagen, description, precio, stock }) => {
    return (
        <div className="producto">
            <div className="producto__img">
                <img src={import.meta.env.BASE_URL + imagen} alt={nombre} />
            </div>
            <h3 className="producto__nombre">{nombre}</h3>
            <p className="producto__stock">Stock: {stock} UN</p>
            <p className="producto__precio">Precio: ${precio}</p>
            <p className="producto__description">{description}</p>
            <button className="producto__button">Comprar</button>
        </div>
    );
};

export default ItemDetail;