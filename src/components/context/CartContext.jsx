import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, quantity) => {
        const index = cart.findIndex((i) => i.id === item.id);
        if (index === -1) {
            setCart([...cart, { ...item, quantity }]);
        } else {
            const newCart = [...cart];
            newCart[index].quantity += quantity;
            setCart(newCart);
        }
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// custom hook para usar el contexto del carrito en cualquier componente que lo necesite
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext debe ser usado dentro de un CartProvider');
    }
    return context;
};