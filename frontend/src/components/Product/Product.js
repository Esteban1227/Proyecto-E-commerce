import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import "./Producto.css"
import { Link } from 'react-router-dom';
function Product({producto, handleProductDetail}) {

    function btnHandleProductDetail(){
        handleProductDetail(producto)
    }

  return (
    <div class="contenedor_producto">
            <div class="contenedor_producto_imagen">
                <img class="contenedor_producto_imagen_img" src={producto.img_producto} alt="producto..." />
            </div>
            <div class="contenedor_producto_nombre">
                <Link to={"DetalleProducto"} onClick={btnHandleProductDetail}>
                    <span class="contenedor_producto_nombre_span">{producto.nombre}</span>
                </Link>
            </div>
            <div class="contenedor_producto_compra">
                <span class="contenedor_producto_compra_precio">${producto.precio}</span>
                <div className='contenedor_producto_compra_boton'>
                    <FaCartPlus/>
                </div>
            </div>
        </div>
  )
}

export default Product