//React
import React from "react";
import { Link } from "react-router-dom";

//Iconos
import { BsCartXFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";

//Boton
import ButtonPrimary from "../Button/ButtonPrimary";

//CSS
import "./CartMenu.css";

//Hooks
import { useCart } from "../../hooks/useCart";
import useGetProducts from "../../hooks/useGetProducts";
import { formatoPrecio } from "../../utils/formatoPrecio";

export default function CartMenu({ openMenu }) {

  const { cart, removeFromCart, clearCart, addCart, diminishCart } = useCart();

  const { products } = useGetProducts();

  return (
    <div
      id="header_carrito"
      className={
        openMenu === "carrito"
          ? "header_carrito animate__animated  animate__fadeIn animate__faster"
          : "inactivo"
      }
    >
      <div className="header_carrito_top">
        <div className="header_carrito_top_miCarrito">
          <FaCartShopping size={"20px"} />
          <h5>Mi Carrito</h5>
        </div>
        <FaTrash className="header_carrito_top_limpiarCarro" size={"20px"} style={{ color: "red" }} onClick={clearCart} />
      </div>
        {cart.length <= 0 ? (
          <>
            <div className="header_carrito_productos header_carrito_productos_noProductos">
              <BsCartXFill size={"30px"} />
              <span>No tienes productos en tu carrito</span>
            </div>
          </>
        ) : (
          <>
            <ul className="header_carrito_productos">
              {cart.map((producto) => {
                return (
                  <li key={producto.id} className="header_carrito_productos_producto">
                    <div className="header_carrito_productos_producto_imagen">
                      <img
                        src={producto.img_producto}
                        alt={producto.descripcion}
                      />
                    </div>
                    <div className="header_carrito_productos_producto_informacion">
                      <span className="header_carrito_productos_producto_informacion_nombre">
                        {producto.nombre.toUpperCase()}
                      </span>
                      <span className="header_carrito_productos_producto_informacion_cantidad">
                        Cantidad: 
                        <button onClick={() => diminishCart(producto)}><BsPatchMinusFill className={producto.cantidad === 1 ? "header_carrito_productos_producto_informacion_cantidad--desactivado" : "header_carrito_productos_producto_informacion_cantidad--activado"} /></button> 
                        {producto.cantidad}
                        <button  onClick={() => addCart(producto)}><BsPatchPlusFill className={products.find(item => item.id === producto.id).cantidad === producto.cantidad ? "header_carrito_productos_producto_informacion_cantidad--desactivado" : "header_carrito_productos_producto_informacion_cantidad--activado"}/></button>
                      </span>
                      <span className="header_carrito_productos_producto_informacion_precio">
                        {formatoPrecio(producto.precio)}
                      </span>
                    </div>
                    <div className="header_carrito_productos_producto_eliminarProducto">
                    <FaTrash className="header_carrito_productos_producto_eliminarProducto_boton" size={"15px"} style={{ color: "red" }} onClick={ () => removeFromCart(producto)} />
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link to="/Tienda/VerificarCompra">
              <ButtonPrimary>Ir Pagar</ButtonPrimary>
            </Link>
          </>
        )}
      <div className="header_carrito_botonIrCarrito">
        <Link to="/Tienda/Carrito">
          Ir a mi carrito
        </Link>
      </div>
    </div>
  );
}
