import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
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