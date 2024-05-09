import React from "react";
import Modal from "react-bootstrap/Modal";
import { CiCirclePlus } from 'react-icons/ci';

import "./ModalProductReviews.css";

export default function ModalProductReviews( { modalComentarios, handleCloseModalComentarios, handleOpenModalCrearComentarios } ) {
  return (
    <Modal
      size="lg"
      show={modalComentarios}
      onHide={handleCloseModalComentarios}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="">⭐ Opiniones del Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal_body">
        <div className="modal_body_contendorComentarios">
          <button
            className="modal_body_contendorComentarios_agregarComentario"
            onClick={handleOpenModalCrearComentarios}
          >
            <CiCirclePlus size={"35px"} />
          </button>
          <div className="modal_body_contendorComentarios_comentario">
            <h6>Esteban Charria</h6>
            <span>Basura producto</span>
            <p>
              El teléfono ha recibido elogios por su cámara de muy buena calidad
              y su rendimiento general, satisfaciendo a los usuarios en aspectos
              clave como la batería y la velocidad. Destaca por su relación
              calidadprecio y las opciones de personalización del software.
            </p>
            <span>⭐⭐</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
