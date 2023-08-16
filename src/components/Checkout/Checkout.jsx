import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'sonner';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {
    const { cart, clear, getTotalPrice } = useCartContext();
    const [orderId, setOrderId] = useState("");

    // Función comprar pedido
    const buyOrder = (data) => {
        const newOrder = {
            cliente: data,
            productos: cart,
            total: getTotalPrice(),
        };

        toast.promise(saveOrder(newOrder), {
            loading: 'Cargando...',
            success: 'Su compra se realizó con éxito',
            error: 'No se pudo realizar la compra',
        });
    };

    // Función para guardar la orden en Firebase y mostrar el toast de loading y confirmación
    const saveOrder = async (newOrder) => {
        const docRef = await addDoc(collection(db, "orders"), newOrder);
        setOrderId(docRef.id);
        clear();
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // FormData es una clase que nos permite crear un objeto con los datos del formulario
        const formData = new FormData(e.target);
        // Object.fromEntries crea un objeto a partir de un array de arrays, donde cada array interno tiene dos elementos: el nombre del campo y el valor del campo
        const data = Object.fromEntries(formData);
        buyOrder(data);
    };

    // Mostrar el id de la orden con un mensaje de agradecimiento luego de la compra
    if (orderId) {
        return (
            <div className="contacto">
                <h1>Gracias por su compra</h1>
                <h2>Su número de orden es: {orderId}</h2>
                <Link to='/' ><img src="/logo.png" alt="logo" /></Link>
            </div>
        );
    }

    return (
        <CheckoutForm handleSubmit={handleSubmit} />
    );
};

export default Checkout;