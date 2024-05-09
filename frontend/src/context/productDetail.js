import { createContext, useState } from "react";

export const ProductDetailContext = createContext();

export const ProductDetailProvider = ({ children }) => {

  const [productDetail, setProductDetail] = useState({});
  
  return (
    <ProductDetailContext.Provider
      value={{ productDetail, setProductDetail }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};