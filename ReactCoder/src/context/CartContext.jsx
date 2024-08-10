/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext()



export const CardProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log("cart", cart)

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    };

    const getTotal = () => {
        return cart.reduce((accu, item) => {
            return accu + item.quantity * item.precio;
        }, 0);
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log("El producto ya esta en el carrito")
        }
    }

    const getTotalQuantity = () => {
        let acc = 0;
        cart.forEach(prod => {
            acc += prod.quantity;
        });
        return acc;
    }
    const clearCart = () => {
        setCart([]);
      };

      const removeItem = (id) => {
        setCart(prev => prev.filter(prod => prod.id !== id));
    };

    const cleanCart = () => {
        setCart([])
    }
    console.log(cleanCart)

    const totalQuantity = getTotalQuantity();


    const obj = { cart, isInCart, addItem, totalQuantity, getTotal,clearCart, removeItem }


    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}

