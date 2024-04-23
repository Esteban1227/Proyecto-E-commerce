import React from 'react'
import ButtonPrimary from '../Button/ButtonPrimary'

export default function FormChangeUserData({user}) {
  return (
    <form className="contenedor_formulario" action="">
            <div className=" contenedor_formulario_bloque">
              <label
                className=""
                for="nombre"
              >
                Nombre
              </label>
              <input
                className=""
                type="text"
                value={user.nombre}
              />
            </div>
            <div className="contenedor_formulario_bloque">
              <label
                className=""
                for="apellido"
              >
                Apellido
              </label>
              <input
                className=""
                type="text"
                value={user.apellido}
              />
            </div>
            <div className="contenedor_formulario_bloque">
              <label
                className=""
                for="numero_de_documento"
              >
                Numero de documento
              </label>
              <input
                className=""
                type="text"
                value={user.id}
              />
            </div>
            <div className="contenedor_formulario_bloque">
              <label
                className=""
                for="correo_eletronico"
              >
                Correo electronico
              </label>
              <input
                className=""
                type="text"
                value={user.correo}
              />
            </div>
            <div className="contenedor_formulario_bloque">
              <label
                className=""
                for="contraseña"
              >
                Contraseña
              </label>
              <input
                className=""
                type="password"
                value={user.contrasena}
              />
            </div>
              <ButtonPrimary>
                Guardar cambios
              </ButtonPrimary>
          </form>
  )
}
