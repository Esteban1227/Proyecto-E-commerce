import React, { useState } from 'react';
import axios from 'axios';
import ButtonPrimary from '../Button/ButtonPrimary';
import { useLoginAndLogout } from '../../hooks/useLoginAndLogout';
import { toast } from "sonner";

function CreateUserForm() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    const { handleSimpleLogin } = useLoginAndLogout();

  
    async function handleSubmit(event) {
      event.preventDefault();
      
      const formData = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena
      };
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/post/CreateUser', formData);
  
        if (response.status === 200) {
          // Si la creación del usuario es exitosa, intenta iniciar sesión automáticamente
          const loginResponse = await axios.post('http://127.0.0.1:5000/api/post/login', {
            id: id,
            contrasena: contrasena
          });
  
          if (loginResponse.status === 200) {
            // Si el inicio de sesión es exitoso, guarda el token de acceso en el almacenamiento local
            const data = loginResponse.data;
            localStorage.setItem('access_token', data.access_token);
            // Llama a la función onLogin para actualizar el estado de autenticación en el componente principal
            handleSimpleLogin(id);
            toast.success("¡Usuario registrado con exito!");
          }
        } else {
          toast.error("El usuario no pudo ser registrado");
        }
      } catch (error) {
        toast.error("Error al crear usuario. Por favor, inténtalo de nuevo.");
      }
    }
  
    return (
      <form onSubmit={handleSubmit} className='contenedor_formulario'>
        <div className="contenedor_formulario_bloque">
          <label htmlFor="id">Numero de documento</label>
          <input
            className=""
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(event) => setId(event.target.value)}
            required
            placeholder="Numero de documento"
          />
        </div>
  
        <div className="contenedor_formulario_bloque">
          <label htmlFor="nombre">Nombre</label>
          <input
            className=""
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
            placeholder="Nombre"
          />
        </div>
  
        <div className="contenedor_formulario_bloque">
          <label htmlFor="apellido">Apellido</label>
          <input
            className=""
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
            required
            placeholder="Apellido"
          />
        </div>
  
        <div className="contenedor_formulario_bloque">
          <label htmlFor="correo">Correo Electronico</label>
          <input
            className=""
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            required
            placeholder="email@gmail.com"
          />
        </div>
  
        <div className="contenedor_formulario_bloque">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            className=""
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            required
            placeholder="******"
          />
        </div>
        <ButtonPrimary type={"submit"}>
          Crear cuenta
        </ButtonPrimary>
      </form>
    );
  }
  
  export default CreateUserForm;
