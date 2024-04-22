import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import "./Producto.css"
import { Link } from 'react-router-dom';
function Product({producto, handleProductDetail}) {

    function btnHandleProductDetail(){
        handleProductDetail(producto)
    }

  return (
    <div className="contenedor_producto">
            <div className="contenedor_producto_imagen">
                <img className="contenedor_producto_imagen_img" src={producto.img_producto} alt="producto..." />
            </div>
            <div className="contenedor_producto_nombre">
                <Link to={"DetalleProducto"} onClick={btnHandleProductDetail}>
                    <span className="contenedor_producto_nombre_span">{producto.nombre}</span>
                </Link>
            </div>
            <div className="contenedor_producto_compra">
                <span className="contenedor_producto_compra_precio">${producto.precio}</span>
                <div className='contenedor_producto_compra_boton'>
                    <FaCartPlus/>
                </div>
            </div>
        </div>
  )
}

export default Product