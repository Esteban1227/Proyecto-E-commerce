import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";
import Carousel from 'react-bootstrap/Carousel';
import "./Shop.css";

function Shop({ handleProductDetail }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/get/productos"
        );

        if (response.status === 200) {
          const data = response.data;
          setData(data);
        } else {
          const data = response.data;
          // Lógica adicional en caso de otro código de estado de respuesta
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    // Llama a la función para obtener datos
    handleData();
  }, []);
  return (
    <>
      <div className="contenedor_productos">
        {data.map((producto) => (
          <Product key={producto.id} producto={producto}  handleProductDetail={handleProductDetail} />
        ))}
      </div>
    </>
  );
}

export default Shop;
