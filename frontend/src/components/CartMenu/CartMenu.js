import React from 'react'
import { BsCartXFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import './CartMenu.css';


export default function CartMenu({openMenu}) {
  

  return (
    <div id="header_carrito" className={openMenu === 'carrito' ? "header_carrito animate__animated  animate__fadeIn animate__faster" : "inactivo"}>
        <div class="header_carrito_top">
          <div class="header_carrito_top_miCarrito">
            <FaCartShopping size={"20px"}/>
            <h5>Mi Carrito</h5>
          </div>
            <FaTrash size={"20px"} style={{ color: "red" }}/>
          
        </div>
        <div class="header_carrito_productos header_carrito_productos_noProductos">
          <BsCartXFill size={"30px"} />
          <span>No tienes productos en tu carrito</span>
        </div>
        <div class="header_carrito_botonIrCarrito">
          <span>Ir a mi carrito</span>
        </div>
      </div>
  )
}
