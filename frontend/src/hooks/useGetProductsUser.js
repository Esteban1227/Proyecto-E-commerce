import React, { useContext, useEffect } from 'react'
import { ProductsUserContext } from '../context/productsUser';
import axios from 'axios';
import { LoginAndLogOutContext } from '../context/loginAndLogout';

export default function useGetProductsUser() {
    const { productsUser, setProductsUser } = useContext(ProductsUserContext)
    
    const { userId  } = useContext(LoginAndLogOutContext)

    useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/get/productos/${userId}`
        );
    
        if (response.status === 200) {
          const data = response.data;
          setProductsUser(data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    
    // Llama a la función para obtener datos
    handleData();
    }, []);
    
  return { productsUser, setProductsUser }
}
