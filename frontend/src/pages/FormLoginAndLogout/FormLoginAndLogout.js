import "./FormLoginAndLogout.css";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";

function FormLoginAndLogout({ onSimpleLogin, onLoginWithUserData }) {
  const [formularioActivo, setFormularioActivo] = useState("iniciarSesion");

  function mostrarFormulario(formulario) {
    setFormularioActivo(formulario);
  }

  return (
    <main>
      <div className="contenedor_principal">
        <div className="contenedor_selectores">
          <div
            className={`contenedor_iniciar_sesion ${
              formularioActivo === "iniciarSesion" ? "activo" : ""
            }`}
            onClick={() => mostrarFormulario("iniciarSesion")}
          >
            <span className="contendor_iniciar_sesion_span">
              iniciar sesion
            </span>
          </div>
          <div
            className={`contenedor_crear_cuenta ${
              formularioActivo === "crearUsuario" ? "activo" : ""
            }`}
            onClick={() => mostrarFormulario("crearUsuario")}
          >
            <span className="contenedor_crear_cuenta_span">crear cuenta</span>
          </div>
        </div>

        {formularioActivo === "iniciarSesion" ? (
          <LoginForm
            onSimpleLogin={onSimpleLogin}
            onLoginWithUserData={onLoginWithUserData}
          />
        ) : (
          <CreateUserForm
            onSimpleLogin={onSimpleLogin}
            onLoginWithUserData={onLoginWithUserData}
          />
        )}
      </div>
    </main>
  );
}

export default FormLoginAndLogout;
