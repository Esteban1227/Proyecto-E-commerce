import React, { useState } from "react";
import { BsFillCartXFill, BsFillCartPlusFill } from "react-icons/bs";

import "./Producto.css";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useProductDetail } from "../../hooks/useProductDetail";
import { formatoPrecio } from "../../utils/formatoPrecio";

function Product({ producto }) {
  const { setProductDetail } = useProductDetail();

  const { addCart, cart, removeFromCart } = useCart();

  const inCart = cart.some((item) => item.id === producto.id);

  return (
    <div className="contenedor_producto">
      <div className="contenedor_producto_imagen">
        <img
          className="contenedor_producto_imagen_img"
          src={producto.img_producto}
          alt={producto.descripcion}
        />
      </div>
      <div className="contenedor_producto_informacion">
        <Link
          className="contenedor_producto_informacion_nombre"
          to={"DetalleProducto"}
          onClick={() => setProductDetail(producto)}
        >
          {producto.nombre.toUpperCase()}
        </Link>
        <span className="contenedor_producto_informacion_cantidad">
          Cantidad: {producto.cantidad}
        </span>
        <div className="contenedor_producto_informacion_compra">
          <span className="contenedor_producto_informacion_compra_precio">
            {formatoPrecio(producto.precio)}
          </span>
          <button
            className={
              inCart
                ? "contenedor_producto_informacion_compra_boton-iconoRemoverPorducto contenedor_producto_informacion_compra_boton"
                : "contenedor_producto_informacion_compra_boton contenedor_producto_informacion_compra_boton-iconoAgregarPorducto"
            }
            onClick={() =>
              inCart ? removeFromCart(producto) : addCart(producto)
            }
          >
            {inCart ? <BsFillCartXFill /> : <BsFillCartPlusFill />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
