import "./FormLoginAndLogout.css";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";

function FormLoginAndLogout() {
  const [formularioActivo, setFormularioActivo] = useState("iniciarSesion");

  function mostrarFormulario(formulario) {
    setFormularioActivo(formulario);
  }

  return (
    <main>
      <div className="contenedor_principal formulario">
          <div className="line">
            <h2>Bienvenid@</h2>
          </div>
        <div className="display-flex contenedor_selector">
          <div
            className={`contenedor_iniciar_sesion ${
              formularioActivo === "iniciarSesion" ? "activo" : ""
            }`}
            onClick={() => mostrarFormulario("iniciarSesion")}
          >
            <span className="contendor_iniciar_sesion_span">
              Iniciar Sesion
            </span>
          </div>
          <div
            className={`contenedor_crear_cuenta ${
              formularioActivo === "crearUsuario" ? "activo" : ""
            }`}
            onClick={() => mostrarFormulario("crearUsuario")}
          >
            <span className="contenedor_crear_cuenta_span">Crear Cuenta</span>
          </div>
        </div>

        {formularioActivo === "iniciarSesion" ? (
          <LoginForm
          />
        ) : (
          <CreateUserForm
          />
        )}
      </div>
    </main>
  );
}

export default FormLoginAndLogout;
