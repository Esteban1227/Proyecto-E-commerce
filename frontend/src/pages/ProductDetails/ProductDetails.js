import React from 'react'
import { IoMdArrowDropup ,IoMdArrowDropdown } from "react-icons/io";

import "./ProductDetails.css"

export const ProductDetails = ({producto}) => {
  return (
    <div class="contenedor_pricipal contenedor_producto_producto">
            <div class="contenedor_principal_imgen">
                <img class="contenedor_principal_imgen_img" src={producto.img_producto} alt="" />
            </div>
            <div class="contenedor_principal_informacion">
                <div class="contenedor_principal_descripcion">
                    <span class="contenedor_principal_descripcion_nombre">{producto.nombre}</span>
                    <p class="contendor_principal_descripcion_parrafo">{producto.descripcion}</p>
                    <div class="contendor_principal_descripcion_contador">
                        <div class="contendor_principal_descripcion_contador_text">
                            <span class="contendor_principal_descripcion_contador_text_span">cantidad: {producto.cantidad}</span>
                        </div>
                        <div class="contendor_principal_descripcion_contador_botones">
                            <IoMdArrowDropup />
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>
                <div class="contenedor_principal_descripcion_boton">
                    <span class="contenedor_principal_descripcion_boton_precio">$ {producto.precio}</span>
                    <button class="contenedor_principal_descripcion_boton_button">agregar al carrito</button>
                </div>
            </div>
        </div>
  )
}
