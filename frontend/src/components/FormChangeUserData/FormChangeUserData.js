import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import axios from "axios";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { toast } from "sonner";

export default function FormChangeUserData({ user }) {
  const [id, setId] = useState(user.id);
  const [nombre, setNombre] = useState(user.nombre);
  const [apellido, setApellido] = useState(user.apellido);
  const [correo, setCorreo] = useState(user.correo);
  const [contrasena, setContrasena] = useState(user.contrasena);
  const [dataChange, setDataChange] = useState(false);

  const { handleSimpleLogin } = useLoginAndLogout()

  async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
      id: user.id,
      nuevoId:id,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      contrasena: contrasena
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/post/ActualizarUsuario', formData);

      if (response.status === 200) {
        handleSimpleLogin(id)
        setDataChange(false)
        toast.success("Cambio Guardado con Exito");

      } else {

      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Error al crear usuario. Por favor, inténtalo de nuevo.');
    }
  }

  return (
    <form className="contenedor_formulario" onSubmit={handleSubmit}>
      <div className=" contenedor_formulario_bloque">
        <label className="" htmlFor="nombre">
          Nombre
        </label>
        <input className="" type="text" value={nombre} onChange={(event) => {setNombre(event.target.value); setDataChange(true)}}/>
      </div>
      <div className="contenedor_formulario_bloque">
        <label className="" htmlFor="apellido">
          Apellido
        </label>
        <input className="" type="text" value={apellido} onChange={(event) => {setApellido(event.target.value); setDataChange(true)}}/>
      </div>
      <div className="contenedor_formulario_bloque">
        <label className="" htmlFor="numero_de_documento">
          Numero de documento
        </label>
        <input className="" type="text" value={id} onChange={(event) => {setId(event.target.value); setDataChange(true)}}/>
      </div>
      <div className="contenedor_formulario_bloque">
        <label className="" htmlFor="correo_eletronico">
          Correo electronico
        </label>
        <input className="" type="email" value={correo} onChange={(event) => {setCorreo(event.target.value); setDataChange(true)}}/>
      </div>
      <div className="contenedor_formulario_bloque">
        <label className="" for="contraseña">
          Contraseña
        </label>
        <input className="" type="password" value={contrasena} onChange={(event) => {setContrasena(event.target.value); setDataChange(true)}}/>
      </div>
      <ButtonPrimary type={"submit"} disabled={!dataChange}>Guardar cambios</ButtonPrimary>
    </form>
  );
}
