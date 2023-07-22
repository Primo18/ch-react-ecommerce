import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncMock";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(Number(itemId))
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {products && <ItemDetail {...products} />}
        </div>
    );
}

export default ItemDetailContainer;