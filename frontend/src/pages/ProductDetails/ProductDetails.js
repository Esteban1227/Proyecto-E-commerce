import React, { useState } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

import ButtonPrimary from "../../components/Button/ButtonPrimary"
import ButtonSecundary from "../../components/Button/ButtonSecundary"
import { FaStar } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal'
import "./ProductDetails.css"
import { CiCirclePlus } from 'react-icons/ci';
import { toast } from 'sonner';

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

    const sumit = () => {
        toast.success("Comentario Publicado con Exito");
        handleCloseModalCrearComentarios()
    }

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="contenedor_principal detalleProducto">

            <Modal
                size="lg"
                show={modalComentarios}
                onHide={handleCloseModalComentarios}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="" >
                        ⭐ Opiniones del Producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal_body'>
                    <div className='modal_body_contendorComentarios'>
                        <button className='modal_body_contendorComentarios_agregarComentario' onClick={handleOpenModalCrearComentarios}>
                            <CiCirclePlus size={"35px"} />
                        </button>
                        <div className='modal_body_contendorComentarios_comentario'>
                            <h6>Esteban Charria</h6>
                            <span>Basura producto</span>
                            <p>El teléfono ha recibido elogios por su cámara de muy buena calidad y su rendimiento general, satisfaciendo a los usuarios en aspectos clave como la batería y la velocidad. Destaca por su relación calidadprecio y las opciones de personalización del software.</p>
                            <span>⭐⭐</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            
            <Modal
                show={modalCrearComentario}
                onHide={handleCloseModalCrearComentarios}>
                <Modal.Header closeButton>
                    <Modal.Title>Publicar Comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className=''>
                        <div className='contenedor_formulario_bloque'>
                            <label>
                                Titulo
                            </label>
                            <input type='text' />
                        </div>
                        <div className='contenedor_formulario_bloque'>
                            <label>
                                Comentario
                            </label>
                            <textarea />
                        </div>
                        <div className='modal_body_calificacion'>
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;

                                return (
                                    <label key={index}>
                                        <input
                                            className='modal_body_crearComentario_calificacion_input'
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <FaStar
                                            className="star"
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            size={30}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonSecundary onClick={handleCloseModalCrearComentarios}>
                        Cerrar
                    </ButtonSecundary>
                    <ButtonPrimary onClick={sumit}>
                        Guardar Cambios
                    </ButtonPrimary>
                </Modal.Footer>
            </Modal>
            
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
    )
}
