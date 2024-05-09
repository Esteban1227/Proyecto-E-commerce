import React from "react";
import { FaCartShopping, FaTrash } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";
import { BsCartXFill, BsPatchMinusFill, BsPatchPlusFill } from "react-icons/bs";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecundary from "../../components/Button/ButtonSecundary";
import "./Cart.css";
import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import { formatoPrecio } from "../../utils/formatoPrecio";

export default function Cart() {
  const { cart, removeFromCart, clearCart, addCart, diminishCart } = useCart();

  const { products } = useGetProducts();

  const totalCompra = formatoPrecio(cart
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.precio * currentValue.cantidad;
    }, 0))


  return (
    <div className="contenedor_principal contenedor_cart">
      <div className="contenedor_cart_top">
        <div className="contenedor_cart_top_left">
          <FaCartShopping size={"30px"} />
          <h2>Mi Carrito</h2>
        </div>
        <button className="contenedor_cart_top_right">
          <FaTrash
            className="header_carrito_top_limpiarCarro"
            size={"30px"}
            onClick={clearCart}
          />
        </button>
      </div>
      {cart.length <= 0 ? (
        <div className="contenedor_cart_notProductos">
          <BsCartXFill size={"50px"} />
          <span>No tienes productos en tu carrito</span>
          <Link to={"/"}>Ir a Comprar</Link>
        </div>
      ) : (
        <>
          <div className="contenedor_cart_productos">
            {cart.map((product) => (
              <div className="contenedor_cart_productos_producto">
                <div className="contenedor_cart_productos_producto_imagen">
                  <img src={product.img_producto} alt="producto"></img>
                </div>
                <div className="contenedor_cart_productos_producto_nombre">
                  <h5>Nombre</h5>
                  <span>T{product.nombre}</span>
                </div>
                <div className="contenedor_cart_productos_producto_cantidad">
                  <button
                    onClick={() =>
                      product.cantidad === 1 ? null : diminishCart(product)
                    }
                  >
                    <BsPatchMinusFill
                      className={
                        product.cantidad === 1
                          ? "header_carrito_productos_producto_informacion_cantidad--desactivado"
                          : "header_carrito_productos_producto_informacion_cantidad--activado"
                      }
                    />
                  </button>
                  {product.cantidad}
                  <button onClick={() => addCart(product)}>
                    <BsPatchPlusFill
                      className={
                        products.find((item) => item.id === product.id)
                          .cantidad === product.cantidad
                          ? "header_carrito_productos_producto_informacion_cantidad--desactivado"
                          : "header_carrito_productos_producto_informacion_cantidad--activado"
                      }
                    />
                  </button>
                </div>
                <div className="contenedor_cart_productos_producto_precio">
                  <h5>Precio</h5>
                  <span>{formatoPrecio(product.precio)}</span>
                </div>
                <div>
                  <button className="contenedor_cart_productos_producto_btnEliminarDeCarrito">
                    <FaTrash
                      size={"20px"}
                      onClick={() => removeFromCart(product)}
                    />
                  </button>
                </div>
              </div>
            ))}

            <div className="contenedor_cart_productos_producto_total">
              <span>
                Total:{" "}
                <span className="contenedor_cart_productos_producto_total--precio">
                  {totalCompra}
                </span>
              </span>
            </div>
          </div>
          <div className="contenedor_cart_botonoes">
          <Link to={"/"}>
            <ButtonSecundary>Ir a Comprar</ButtonSecundary>
          </Link>
            <Link to="/Tienda/VerificarCompra">
              <ButtonPrimary>Ir a Pagar</ButtonPrimary>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
