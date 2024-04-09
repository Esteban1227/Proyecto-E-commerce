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

// function FormLoginAndLogout() {
//   return (
//     <div class="contenedor_principal">

//       <div class="contenedor_selectores">
//         <div class="contenedor_iniciar_sesion activo">
//           <span class="contendor_iniciar_sesion_span">iniciar sesion</span>
//         </div>
//         <div class="contenedor_crear_cuenta">
//           <span class="contenedor_crear_cuenta_span">crear cuenta</span>
//         </div>
//       </div>

//       <form class="contenedor_formulario contenedor_formulario_iniciarSesion" id="loginForm" action="/login" method="POST">

//         <div class="contenedor_documentoIdentidad contenedor_formulario_bloque">
//           <label for="id">
//             Documento de identidad
//           </label>
//           <input type="text" id="id" name="id" required class="contenedor_documentoIdentidad_input contenedor_formulario_input" placeholder="1107837851"/>
//         </div>

//         <div class="contenedor_contrasena contenedor_formulario_bloque">
//           <label for="contrasena">
//             Contraseña
//           </label>
//           <input class="contenedor_contrasena_input contenedor_formulario_input" type="password" id="contrasena" name="contrasena" required placeholder="******"/>
//         </div>
//         <div class="contenedor_botones">
//           <button type="submit" class="contenedor_botones_input">Ingresar a mi cuenta</button>
//         </div>
//       </form>

//       <form id="registroForm" action="/registro" method="POST" class="contenedor_formulario inactivo contenedor_formulario_crearUsuario">

//         <div class="contenedor_correo_electronico contenedor_formulario_bloque">
//           <label for="id">
//             Numero de documento
//           </label>
//           <input class="contenedor_correo_eletronico_input contenedor_formulario_input" type="text" id="id" name="id" required placeholder="Numero de documento"/>
//         </div>
//         <div class="contenedor_correo_electronico contenedor_formulario_bloque">
//           <label for="nombre">
//             Nombre
//           </label>
//           <input class="contenedor_correo_eletronico_input contenedor_formulario_input" type="text" id="nombre" name="nombre" required placeholder="Nombre"/>
//         </div>

//         <div class="contenedor_correo_electronico contenedor_formulario_bloque">
//           <label for="apellido">
//             Apellido
//           </label>
//           <input class="contenedor_correo_eletronico_input contenedor_formulario_input" type="text" id="apellido" name="apellido" required placeholder="Apellido"/>
//         </div>

//         <div class="contenedor_correo_electronico contenedor_formulario_bloque">
//           <label for="">
//             Correo Electronico
//           </label>
//           <input class="contenedor_correo_eletronico_input contenedor_formulario_input" type="email" id="correo" name="correo" required placeholder="email@gmail.com"/>
//         </div>

//         <div class="contenedor_contrasena contenedor_formulario_bloque">
//           <label for="">
//             Contraseña
//           </label>
//           <input class="contenedor_contrasena_input contenedor_formulario_input" type="password" id="contrasena" name="contrasena" required placeholder="******"/>
//         </div>
//         <div class="contenedor_botones">
//           <button type="submit" class="contenedor_botones_input">Crear cuenta</button>
//         </div>
//       </form>

//     </div>
//   );
// }

// export default FormLoginAndLogout;
