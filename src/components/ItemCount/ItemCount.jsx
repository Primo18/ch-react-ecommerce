import '../Item/Item.css'
import './ItemCount.css';

const ItemCount = ({ count, handleSubstract, handleAdd, handleOnAdd }) => {
    return (
        <>
            <div className="producto__count">
                <button className="producto__button producto__count-button" onClick={handleSubstract}>-</button>
                <p className="producto__count-number">{count}</p>
                <button className="producto__button producto__count-button" onClick={handleAdd}>+</button>
            </div>
            <button className="producto__button producto__count-button--add" onClick={handleOnAdd}>Agregar al carrito</button>
        </>
    );
};

export default ItemCount;