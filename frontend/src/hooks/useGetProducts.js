import axios from "axios";

import { useContext, useEffect } from "react";
import { ProductContext } from "../context/product";

export default function useGetProducts() {
  const { setProducts, products } = useContext(ProductContext);

  useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/get/productos"
        );

        if (response.status === 200) {
          const data = response.data;
          setProducts(data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    // Llama a la función para obtener datos
    handleData();
  }, []);

  return { products };
}
