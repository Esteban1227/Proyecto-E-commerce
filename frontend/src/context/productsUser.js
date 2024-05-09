import { createContext, useState } from "react";

export const ProductsUserContext = createContext();

export const ProductsUserProvider = ({ children }) => {

  const [productsUser, setProductsUser] = useState([]);
  
  return (
    <ProductsUserContext.Provider
      value={{ productsUser, setProductsUser }}
    >
      {children}
    </ProductsUserContext.Provider>
  );
};