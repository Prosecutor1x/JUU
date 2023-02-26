
import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
    cartData: [],
    setCartData: () => { }
};

const CartContext = createContext(defaultValues);

export function useCart() {
    return useContext(CartContext);
}

export function CartContextProvider({ children }) {
    const [cartData, setCartData] = useState([])
    return (
      <CartContext.Provider value={{ cartData, setCartData }}>
        {children}
      </CartContext.Provider>
    );
  }
