import { createContext, useState } from "react";

export const ProductEditContext = createContext();

export const ProductEditProvider = ({ children }) => {

  const [productEdit, setProductEdit] = useState({});
  
  return (
    <ProductEditContext.Provider
      value={{  productEdit, setProductEdit }}
    >
      {children}
    </ProductEditContext.Provider>
  );
};