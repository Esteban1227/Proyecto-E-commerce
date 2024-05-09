import React, { useState } from 'react';
import axios from 'axios';
import ButtonPrimary from '../Button/ButtonPrimary';
import { useLoginAndLogout } from '../../hooks/useLoginAndLogout';
import { toast } from "sonner";

function LoginForm() {
  const { user, setUser, handleSimpleLogin } = useLoginAndLogout()
  const [error, setError] = useState(false);



  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/post/login', { id:user.id, contrasena:user.contrasena });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('access_token', data.access_token);
        handleSimpleLogin(user.id);
      } else {
        setError(true)
        toast.error("Datos incorrectos " + response.status);
      }
    } catch (error) {
      setError(true)
      toast.error("Error al iniciar sesión");
    }
  }

  return (
    <form onSubmit={handleSubmit} className='contenedor_formulario'>
      <div className="contenedor_documentoIdentidad contenedor_formulario_bloque">
        <label htmlFor="id">Documento de identidad</label>
        <input
          type="text"
          id="id"
          value={user.id}
          onChange={(event) => setUser(prevState => ({...prevState, id: event.target.value}) )}
          required
          className={error ? "error" : ""}
          placeholder="1107837851"
        />
      </div>

      <div className="contenedor_contrasena contenedor_formulario_bloque">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          value={user.contrasena}
          onChange={(event) => setUser(prevState => ({...prevState, contrasena: event.target.value}))}
          required
          className={error ? "error" : ""}
          placeholder="******"
        />
      </div>
        <ButtonPrimary type={"submit"}>
          Ingresar a mi cuenta
        </ButtonPrimary>
    </form>
  );
}

export default LoginForm;
