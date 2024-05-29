import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./ModalSendComment.css";
import { FaStar } from "react-icons/fa6";
import ButtonSecundary from "../Button/ButtonSecundary";
import ButtonPrimary from "../Button/ButtonPrimary";
import { toast } from "sonner";
import axios from "axios";
import { useProductDetail } from "../../hooks/useProductDetail";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { useProductReview } from "../../hooks/useProductReview";

export default function ModalPostComment({
  modalCrearComentario,
  handleCloseModalCrearComentarios,
}) {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);

  const { productDetail } = useProductDetail();

  const { userId } = useLoginAndLogout();
  
  const [titulo, setTitulo] = useState("");
  const [idProducto, setIdProducto] = useState(productDetail.id);
  const [idUsuario, setIdUsuario] = useState(userId);
  const [comentario, setComentario] = useState("");
  const [calificacion, setCalificacion] = useState(rating);
  const { fetchProductReviews } = useProductReview();
  
  function resetForm() {
    setRating(1);
    setHover(0);
    setTitulo("");
    setComentario("");
  }

  // Función para manejar el envío del formulario
  async function handleSubmit(event) {
    event.preventDefault();


    try {
      const formData = {
        titulo: titulo,
        id_producto: idProducto,
        id_usuario: idUsuario,
        comentario: comentario,
        calificacion: calificacion,
      };

      const response = await axios.post(
        "http://127.0.0.1:5000/api/post/CreateReview",
        formData
      );

      // Verificar si la creación del producto fue exitosa
      if (response.status === 200) {
        await fetchProductReviews();
        resetForm()
        toast.success("Se publico el comentario con exito");
      } else {
        // Maneja el caso de error
        toast.error("No se a podido publicar el comentario");
      }
    } catch (error) {
      toast.error("No se a podido publicar el comentario");
    }
  }


  return (
    <Modal
      show={modalCrearComentario}
      onHide={handleCloseModalCrearComentarios}
    >
      <Modal.Header closeButton>
        <Modal.Title>Publicar Comentario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="" onSubmit={handleSubmit}>
          <div className="contenedor_formulario_bloque">
            <label>Titulo</label>
            <input
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              required
            />
          </div>
          <div className="contenedor_formulario_bloque">
            <label>Comentario</label>
            <textarea
              value={comentario}
              onChange={(event) => setComentario(event.target.value)}
              required
            />
          </div>
          <div className="modal_body_calificacion">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label
                  className="modal_body_crearComentario_calificacion_label"
                  key={index}
                >
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
          <ButtonSecundary onClick={handleCloseModalCrearComentarios}>
            Cerrar
          </ButtonSecundary>
          <ButtonPrimary type={"submit"}>Publicar</ButtonPrimary>
        </form>
      </Modal.Body>
    </Modal>
  );
}
