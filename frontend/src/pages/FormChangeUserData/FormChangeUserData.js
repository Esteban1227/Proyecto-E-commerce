import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FormChangeUserData.css";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

export default function FormChangeUserData({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/get/usuarios/" + id
        );

        if (response.status === 200) {
          //   const data = response.data;
          setData(response.data);
        } else {
          const data = response.data;
          // Lógica adicional en caso de otro código de estado de respuesta
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    // Llama a la función para obtener datos
    handleData();
  }, []);
  return (
    <React.Fragment>
      {data.map((user) => (
        <div className="contenedor_principal_mi_usuario">
          <div className="contenedor_bienvenida_mi_cuenta">
            <h3 className="contenedor_bienvenida_mi_cuenta_h3">Bienvenid@</h3>
            <span className="contenedor_bienvenida_mi_cuenta_s">{user.nombre + " " + user.apellido}</span>
          </div>
          <form className="contenedor_principal_formulario_mi_usuario" action="">
            <div className="contenedor_principal_formulario_mi_usuario_bloque">
              <label
                className="contenedor_principal_formulario_mi_usuario_label"
                for="nombre"
              >
                Nombre
              </label>
              <input
                className="contenedor_principal_formulario_mi_usuario_input"
                type="text"
                value={user.nombre}
              />
            </div>
            <div className="contenedor_principal_formulario_mi_usuario_bloque">
              <label
                className="contenedor_principal_formulario_mi_usuario_label"
                for="apellido"
              >
                Apellido
              </label>
              <input
                className="contenedor_principal_formulario_mi_usuario_input"
                type="text"
                value={user.apellido}
              />
            </div>
            <div className="contenedor_principal_formulario_mi_usuario_bloque">
              <label
                className="contenedor_principal_formulario_mi_usuario_label"
                for="numero_de_documento"
              >
                Numero de documento
              </label>
              <input
                className="contenedor_principal_formulario_mi_usuario_input"
                type="text"
                value={user.id}
              />
            </div>
            <div className="contenedor_principal_formulario_mi_usuario_bloque">
              <label
                className="contenedor_principal_formulario_mi_usuario_label"
                for="correo_eletronico"
              >
                Correo electronico
              </label>
              <input
                className="contenedor_principal_formulario_mi_usuario_input"
                type="text"
                value={user.correo}
              />
            </div>
            <div className="contenedor_principal_formulario_mi_usuario_bloque">
              <label
                className="contenedor_principal_formulario_mi_usuario_label"
                for="contraseña"
              >
                Contraseña
              </label>
              <input
                className="contenedor_principal_formulario_mi_usuario_input"
                type="password"
                value={user.contrasena}
              />
            </div>
            <div className="contenedor_principal_formulario_mi_usuario_boton">
              <ButtonPrimary>
                Guardar cambios
              </ButtonPrimary>
            </div>
          </form>
        </div>
      ))}
    </React.Fragment>
  );
}
