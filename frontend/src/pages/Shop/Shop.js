import React from "react";
import Product from "../../components/Product/Product";
import useGetProducts from "../../hooks/useGetProducts";
import { useSearch } from "../../hooks/useSearch";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import Carousel from "react-bootstrap/Carousel";

import "./Shop.css";

function Shop() {

  
  const { products } = useGetProducts();

  const { searchTerm } = useSearch()

  const filteredProducts = products.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="contenedor_productos">
      {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <Product key={producto.id} producto={producto} />
          ))
        ) : (
          <div className="contenedor_productos--sinProductos">
            <MdOutlineProductionQuantityLimits size={"60px"} color="#26b1e7"/>
            <h2>No se encontre el producto: {searchTerm}</h2>
          </div>
        )}
      </section>
    </>
  );
}

export default Shop;
