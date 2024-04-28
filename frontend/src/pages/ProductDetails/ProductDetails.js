import React, { useState } from 'react'

import ModalProductReviews from '../../components/ModalProductReviews/ModalProductReviews';



import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import ButtonPrimary from "../../components/Button/ButtonPrimary"

import "./ProductDetails.css"
import ModalPostComment from '../../components/ModalPostComment/ModalPostComment';

export const ProductDetails = ({ producto }) => {
    const [modalComentarios, setModalComentarios] = useState(false);
    const [modalCrearComentario, setModalCrearComentario] = useState(false);

    const handleCloseModalComentarios = () => {
        setModalComentarios(false)
    }
    const handleOpenModalComentarios = () => {
        setModalComentarios(true)
    }
    const handleCloseModalCrearComentarios = () => {
        setModalCrearComentario(false)
        setModalComentarios(true)
    }
    const handleOpenModalCrearComentarios = () => {
        setModalCrearComentario(true)
        setModalComentarios(false)
    }

    

    return (
        <>
            <ModalProductReviews modalComentarios={modalComentarios} handleCloseModalComentarios={handleCloseModalComentarios} handleOpenModalCrearComentarios={handleOpenModalCrearComentarios}/>

            <ModalPostComment modalCrearComentario={modalCrearComentario} handleCloseModalCrearComentarios={handleCloseModalCrearComentarios}/>
            
            <div className="contenedor_principal detalleProducto">
                <div className="detalleProducto_contenedorImg">
                    <img className="detalleProducto_contenedorImg-img" src={producto.img_producto} alt="" />
                    <div className='detalleProducto_contenedorImg_reseñas' onClick={handleOpenModalComentarios}>
                        <FaStar />
                        <span>
                            Opiniones
                        </span>
                    </div>
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
        </>
    )
}
