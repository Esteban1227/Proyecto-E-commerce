import React from 'react'
import { IoMdArrowDropup ,IoMdArrowDropdown } from "react-icons/io";

import ButtonPrimary from "../../components/Button/ButtonPrimary"

import "./ProductDetails.css"

export const ProductDetails = ({producto}) => {
  return (
    <div className="contenedor_principal detalleProducto">
            <div className="detalleProducto_contenedorImg">
                <img className=" detalleProducto_contenedorImg-img" src={producto.img_producto} alt="" />
            </div>
            <div className="detalleProducto_contenedorInformacion">
                <div className="detalleProducto_contenedorInformacion_descripcion">
                    <span className="detalleProducto_contenedorInformacion_descripcion--nombre">{producto.nombre}</span>
                    <p className="detalleProducto_contenedorInformacion_descripcion--descripcion">{producto.descripcion}</p>
                    <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador">
                        <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_cantidad">
                            <span className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_cantidad--valor">cantidad: {producto.cantidad}</span>
                        </div>
                        <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_contenedorBotones">
                            <IoMdArrowDropup />
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>
                <div className="detalleProducto_contenedorInformacion_contenedorInferior">
                    <span className="detalleProducto_contenedorInformacion_contenedorInferior--precio">$ {producto.precio}</span>
                    <ButtonPrimary>
                        Agregar al carrito
                    </ButtonPrimary>
                </div>
            </div>
        </div>
  )
}
