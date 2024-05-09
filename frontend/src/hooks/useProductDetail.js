import { useContext } from "react";

import { ProductDetailContext } from "../context/productDetail";

export const useProductDetail = () =>{
    const contextProductDetail = useContext(ProductDetailContext)

    return contextProductDetail
}