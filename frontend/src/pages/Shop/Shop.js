import React from "react";
import Product from "../../components/Product/Product";
import useGetProducts from "../../hooks/useGetProducts";
// import Carousel from "react-bootstrap/Carousel";

import "./Shop.css";

function Shop() {

  
  const { products } = useGetProducts();

  return (
    <>
      <section className="contenedor_productos">
        {products.map((producto) => {
          return (
            <Product
              key={producto.id}
              producto={producto}
            />
          );
        })}
      </section>
    </>
  );
}

export default Shop;
