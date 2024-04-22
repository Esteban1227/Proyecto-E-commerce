import React from 'react'
import { IoMdArrowDropup ,IoMdArrowDropdown } from "react-icons/io";

import "./ProductDetails.css"

export const ProductDetails = ({producto}) => {
  return (
    <div className="contenedor_pricipal contenedor_producto_producto">
            <div className="contenedor_principal_imgen">
                <img className="contenedor_principal_imgen_img" src={producto.img_producto} alt="" />
            </div>
            <div className="contenedor_principal_informacion">
                <div className="contenedor_principal_descripcion">
                    <span className="contenedor_principal_descripcion_nombre">{producto.nombre}</span>
                    <p className="contendor_principal_descripcion_parrafo">{producto.descripcion}</p>
                    <div className="contendor_principal_descripcion_contador">
                        <div className="contendor_principal_descripcion_contador_text">
                            <span className="contendor_principal_descripcion_contador_text_span">cantidad: {producto.cantidad}</span>
                        </div>
                        <div className="contendor_principal_descripcion_contador_botones">
                            <IoMdArrowDropup />
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>
                <div className="contenedor_principal_descripcion_boton">
                    <span className="contenedor_principal_descripcion_boton_precio">$ {producto.precio}</span>
                    <button className="contenedor_principal_descripcion_boton_button">agregar al carrito</button>
                </div>
            </div>
        </div>
  )
}
