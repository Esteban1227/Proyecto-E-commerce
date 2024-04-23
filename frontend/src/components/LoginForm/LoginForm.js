import React, { useState } from 'react';
import axios from 'axios';
import ButtonPrimary from '../Button/ButtonPrimary';

function LoginForm({ onSimpleLogin }) {
  const [id, setId] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/post/login', { id, contrasena });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('access_token', data.access_token);
        onSimpleLogin(id);
      } else {
        const data = response.data;
        setError(data.error);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='contenedor_formulario'>
      <div className="contenedor_documentoIdentidad contenedor_formulario_bloque">
        <label htmlFor="id">Documento de identidad</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          required
          className="contenedor_documentoIdentidad_input contenedor_formulario_input"
          placeholder="1107837851"
        />
      </div>

      <div className="contenedor_contrasena contenedor_formulario_bloque">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
          required
          className="contenedor_contrasena_input contenedor_formulario_input"
          placeholder="******"
        />
      </div>
        <ButtonPrimary type={"submit"}>
          Ingresar a mi cuenta
        </ButtonPrimary>
      {error && <span>{error}</span>}
    </form>
  );
}

export default LoginForm;
