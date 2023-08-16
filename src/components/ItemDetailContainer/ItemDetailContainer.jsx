import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const { itemId } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "productos", itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProducts({ ...docSnap.data(), id: docSnap.id });
            } else {
                console.log("No such document!");
            }
        };
        getProduct();
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {products && <ItemDetail {...products} />}
        </div>
    );
}

export default ItemDetailContainer;