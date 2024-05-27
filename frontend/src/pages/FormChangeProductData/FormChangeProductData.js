import React, { useState } from "react";
import "./FormChangeProductData.css";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import { useProductEdit } from "../../hooks/useProductEdit";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { toast } from "sonner";
import axios from "axios";
import useGetCategory from "../../hooks/useGetCategory";

export default function FormChangeProductData() {
  const { productEdit } = useProductEdit()
  
  const [previewSrc, setPreviewSrc] = useState(null); // Estado para almacenar la URL de la imagen previa
  const [nombre, setNombre] = useState(productEdit.nombre);
  const [productId, setProductId] = useState(productEdit.id );
  const [marca, setMarca] = useState(productEdit.marca);
  const [precio, setPrecio] = useState(productEdit.precio);
  const [cantidad, setCantidad] = useState(productEdit.cantidad);
  const [categoria, setCategoria] = useState(productEdit.categoria);
  const [descripcion, setDescripcion] = useState(productEdit.descripcion);
  const [fileImg, setFileImg] = useState(productEdit.img_producto);
  const { userId } = useLoginAndLogout()
  const [dataChange, setDataChange] = useState(false);
  const { categories } = useGetCategory()

  
  function previewImage(event) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setFileImg(imageData);
      setPreviewSrc(imageData); // Actualiza el estado con la URL de la imagen previa
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // Función para manejar el envío del formulario
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = {
        id:productId,
        nombre: nombre,
        marca: marca,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria,
        descripcion: descripcion,
        idUsuario: userId,
        fileImg: fileImg,
      };

      const response = await axios.post(
        "http://127.0.0.1:5000/api/post/ActualizarProducto",
        formData
      );

      // Verificar si la creación del producto fue exitosa
      if (response.status === 200) {
        // Producto creado exitosamente, maneja el resultado según sea necesario
        // clearForm();
        setDataChange(false)
        toast.success("Producto creado con exito");
      } else {
        // Maneja el caso de error
        toast.error("No se a podido crear el producto " + response.status);
      }
    } catch (error) {
      toast.error("No se a podido crear el producto" + error);
    }
  }


  return (
    <section className="contenedor_principal formulario">
      <div className="line">
        <h2>Editar Producto</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        id="form-createProduct"
        className="contenedor_formulario contenedor_formulario_crearProducto"
        encType="multipart/form-data"
      >
        <div className="contenedor_nombre_producto contenedor_formulario_bloque">
          <label htmlFor="nombre">Nombre</label>
          <input
            className="contenedor_nombre_producto_input contenedor_formulario_input"
            type="text"
            id="nombre"
            name="nombre"
            required
            value={nombre}
            onChange={(event) => {setNombre(event.target.value); setDataChange(true)}}
          />
        </div>

        <div className="contenedor_marca_producto contenedor_formulario_bloque">
          <label htmlFor="marca">Marca</label>
          <input
            className="contenedor_marca_producto_input contenedor_formulario_input"
            type="text"
            id="marca"
            name="marca"
            required
            value={marca}
            onChange={(event) => {setMarca(event.target.value); setDataChange(true)}}

          />
        </div>

        <div className="contenedor_precio_producto contenedor_formulario_bloque">
          <label htmlFor="precio">Precio</label>
          <input
            className="contenedor_precio_producto_input contenedor_formulario_input"
            type="text"
            id="precio"
            name="precio"
            required
            value={precio}
            onChange={(event) => {setPrecio(event.target.value); setDataChange(true)}}

          />
        </div>

        <div className="contenedor_cantidad_producto contenedor_formulario_bloque">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            className="contenedor_cantidad_producto_input contenedor_formulario_input"
            type="text"
            id="cantidad"
            name="cantidad"
            required
            value={cantidad}
            onChange={(event) => {setCantidad(event.target.value); setDataChange(true)}}

          />
        </div>

        <div className="contenedor_categoria_producto contenedor_formulario_bloque">
          <label htmlFor="categoria">Categoría</label>
          <select required onChange={(event) => {setCategoria(event.target.value); setDataChange(true)}}>
            <option value={categoria}>{categoria}</option>
            {
              categories.map(category => (
                 <option value={category.nombre} key={category.id}>{category.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="contenedor_descripcion_producto contenedor_formulario_bloque">
          <label htmlFor="descripcion">Descripción</label>
          <input
            className="contenedor_descripcion_producto_input contenedor_formulario_input"
            type="text"
            id="descripcion"
            name="descripcion"
            required
            value={descripcion}
            onChange={(event) => {setDescripcion(event.target.value); setDataChange(true)}}

          />
        </div>
        <label className="contenedor_formulario_bloqueImg" for="fileImg">
          Imagen del producto
          <label
            className="custum-file-upload contenedor_formulario_fileImg"
            for="fileImg"
          >
            <div className="icon contenedor_formulario_fileImg_icono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill=""
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="text contenedor_formulario_fileImg_texto">
              <span>Click Para Subir la imagen del producto</span>
            </div>
            <input
              className="contenedor_formulario_fileImg_inputFile"
              type="file"
              id="fileImg"
              name="fileImg"
              onChange={(event) => {setDataChange(true); previewImage(event)}}

            />
            <div
              id="preview"
              className="contenedor_formulario_fileImg_previsualizacion"
            >
              {previewSrc ? <img src={previewSrc} alt="Previsualización"/> :  <img src={fileImg} alt="Previsualización" />}
            </div>
          </label>
        </label>

        <ButtonPrimary type={"submit"} disabled={!dataChange}>Guardar cambios</ButtonPrimary>
      </form>
    </section>
  );
}
