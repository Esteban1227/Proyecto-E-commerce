import { useContext } from "react";

import { ProductEditContext } from "../context/productEdit";

export const useProductEdit = () =>{
    const contextProductDetail = useContext(ProductEditContext)

    return contextProductDetail
}