import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./ModalSendComment.css";
import { FaStar } from "react-icons/fa6";
import ButtonSecundary from "../Button/ButtonSecundary";
import ButtonPrimary from "../Button/ButtonPrimary";

export default function ModalPostComment({ modalCrearComentario, handleCloseModalCrearComentarios}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <Modal
      show={modalCrearComentario}
      onHide={handleCloseModalCrearComentarios}
    >
      <Modal.Header closeButton>
        <Modal.Title>Publicar Comentario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="">
          <div className="contenedor_formulario_bloque">
            <label >Titulo</label>
            <input type="text" />
          </div>
          <div className="contenedor_formulario_bloque">
            <label>Comentario</label>
            <textarea/>
          </div>
          <div className="modal_body_calificacion">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <input
                    className="modal_body_crearComentario_calificacion_input"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
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
        <ButtonPrimary>Guardar Cambios</ButtonPrimary>
      </Modal.Footer>
    </Modal>
  );
}