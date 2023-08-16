import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const productsCollection = collection(db, 'productos');
            let productsQuery;
            if (categoryId) {
                const categoryQuery = query(productsCollection, where('categoria', '==', categoryId));
                productsQuery = categoryQuery;
            } else {
                productsQuery = productsCollection;
            }
            const productsSnapshot = await getDocs(productsQuery);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        };
        getProducts();
    }, [categoryId]);

    return (
        <div className="item-list-container ">
            <h1>{greeting}</h1>
            <h2>En este sitio podrás encontrar las mejores frutas y verduras de la región.</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;