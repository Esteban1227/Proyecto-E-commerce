import React, { useState } from 'react'

import ModalProductReviews from '../../components/ModalProductReviews/ModalProductReviews';



import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import ButtonPrimary from "../../components/Button/ButtonPrimary"

import "./ProductDetails.css"
import ModalPostComment from '../../components/ModalPostComment/ModalPostComment';
import { useCart } from '../../hooks/useCart';
import ButtonSecundary from '../../components/Button/ButtonSecundary';
import { useProductDetail } from '../../hooks/useProductDetail';
import { formatoPrecio } from '../../utils/formatoPrecio';

export const ProductDetails = () => {

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

    const { productDetail } = useProductDetail()

    const { cart, removeFromCart, addCart, diminishCart } = useCart();

    const inCart = cart.some((item) => item.id === productDetail.id);

    return (
        <>
            <ModalProductReviews modalComentarios={modalComentarios} handleCloseModalComentarios={handleCloseModalComentarios} handleOpenModalCrearComentarios={handleOpenModalCrearComentarios}/>

            <ModalPostComment modalCrearComentario={modalCrearComentario} handleCloseModalCrearComentarios={handleCloseModalCrearComentarios}/>
            
            <div className="contenedor_principal detalleProducto">
                <div className="detalleProducto_contenedorImg">
                    <img className="detalleProducto_contenedorImg-img" src={productDetail.img_producto} alt="" />
                    <div className='detalleProducto_contenedorImg_reseñas' onClick={handleOpenModalComentarios}>
                        <FaStar />
                        <span>
                            Opiniones
                        </span>
                    </div>
                </div>
                <div className="detalleProducto_contenedorInformacion">
                    <div className="detalleProducto_contenedorInformacion_descripcion">
                        <span className="detalleProducto_contenedorInformacion_descripcion--nombre">{productDetail.nombre.toUpperCase()}</span>
                        <p className="detalleProducto_contenedorInformacion_descripcion--descripcion">{productDetail.descripcion}</p>
                        <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador">
                            <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_cantidad">
                                <span className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_cantidad--valor">cantidad: {inCart ? cart.find(item => item.id === productDetail.id).cantidad : "0"}</span>
                            </div>
                            <div className="detalleProducto_contenedorInformacion_descripcion_contenedorContador_contenedorBotones">
                                <button onClick={() => addCart(productDetail)}>
                                    <IoMdArrowDropup />
                                </button>
                                <button onClick={() => diminishCart(productDetail)}>
                                    <IoMdArrowDropdown />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="detalleProducto_contenedorInformacion_contenedorInferior">
                        <span className="detalleProducto_contenedorInformacion_contenedorInferior--precio">{formatoPrecio(productDetail.precio)}</span>
                        {
                            inCart 
                                ? 
                                    <ButtonSecundary onClick={() => removeFromCart(productDetail)}>Remover del carrito</ButtonSecundary>
                                :
                                <ButtonPrimary onClick={() => addCart(productDetail)}>
                                    Agregar al carrito
                                </ButtonPrimary>
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
