import React from "react";
import Modal from "react-bootstrap/Modal";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegSadTear } from "react-icons/fa";

import "./ModalProductReviews.css";
import { useProductReview } from "../../hooks/useProductReview";

export default function ModalProductReviews({
  modalComentarios,
  handleCloseModalComentarios,
  handleOpenModalCrearComentarios,
}) {
  const { productReview } = useProductReview();

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
          <div className="modal_body_contendorComentarios_contenedor">
            {productReview.length === 0 ? (
              <div className="modal_body_contendorComentarios_sinComentario">
                <FaRegSadTear  size={"40px"} color="#26b1e7"/>
                <h4>Este producto no tiene reseñas todavia</h4>
                <span>Se el primero en dar tu opinar acerca de este producto</span>
              </div>
            ) : (
              productReview.map((comment) => (
                <div className="modal_body_contendorComentarios_comentario">
                  <h6>{comment.nombre}</h6>
                  <span>{comment.titulo}</span>
                  <p>{comment.comentario}</p>
                  {Array.from({ length: comment.calificacion }, (_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
