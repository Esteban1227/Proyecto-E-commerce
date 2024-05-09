import { useContext } from "react";

import { CartContext } from "../context/cart";
import useGetProducts from "./useGetProducts";

export const useCart = () =>{
    const {setCart, cart } = useContext(CartContext)

    const { products } = useGetProducts();

  const addCart = (product) => {
    const prductInCartIndex = cart.findIndex((item) => item.id === product.id);

    const productBase = products.find((item) => item.id === product.id);

    if (prductInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[prductInCartIndex].cantidad < productBase.cantidad) {
        newCart[prductInCartIndex].cantidad += 1;
        return setCart(newCart);
      } else return;
    }

    setCart((prevState) => [...prevState, { ...product, cantidad: 1 }]);
  };

  const diminishCart = (product) => {
    const prductInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (prductInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[prductInCartIndex].cantidad > 1) {
        newCart[prductInCartIndex].cantidad -= 1;
        return setCart(newCart);
      }
      removeFromCart(product)
    }

  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };


    return { cart, setCart ,addCart, removeFromCart ,diminishCart, clearCart}
}