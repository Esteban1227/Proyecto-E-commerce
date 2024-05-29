import React from "react";
import "./FormUserProducts.css";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetProductsUser from "../../hooks/useGetProductsUser";
import { useProductEdit } from "../../hooks/useProductEdit";
import { BsCartXFill } from "react-icons/bs";

export default function FormUserProducts() {

  const { productsUser } = useGetProductsUser()

  const { setProductEdit } = useProductEdit()

  return (
    <div className="contenedor_productosUser">
      {productsUser.length > 0 ? (productsUser.map(producto => (
        <div className="contenedor_productosUser_producto">
          <img src={producto.img_producto}
            alt={producto.descripcion} />
          <div className="contenedor_productosUser_producto_informacion">
            <span className="contenedor_productosUser_producto_informacion--nombre">
              {producto.nombre}
            </span>
            <span className="contenedor_productosUser_producto_informacion--precio">
              {producto.precio}
            </span>
          </div>
          <button onClick={() => setProductEdit(producto)}>
            <Link to={"/Tienda/EditarInformacionProudcto"}>
              <FaEdit size={"20px"} color="#26b1e7" />
            </Link>
          </button>
        </div>
      ))) : (
      <div className="contenedor_productosUser_noProduct">
        <BsCartXFill size={"30px"}color="#26b1e7" />
        <span>No tienes productos creados</span>
        <Link to={"/Tienda/CrearProducto"}>Crea tus productos</Link>
      </div>)
      }
    </div>
  );
}
