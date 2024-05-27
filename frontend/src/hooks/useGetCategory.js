import axios from "axios";

import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/category";


export default function useGetCtegory() {
    
  const { setCategories, categories } = useContext(CategoryContext)

    
    useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/get/categorias"
        );
    
        if (response.status === 200) {
          const data = response.data;
          setCategories(data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    
    // Llama a la función para obtener datos
    handleData();
    }, []);
    
  return { categories }
}

