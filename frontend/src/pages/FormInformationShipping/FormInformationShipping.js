import React from 'react'
import "./FormInformationShipping.css"

export default function FormInformationShipping() {
  return (
    <div class="contenedor_principal">
  
              <div class="contenedor_selectores">
                  <div class="contenedor_crear_producto activo">
                      <span class="contendor_crear_producto_span"> Informacion Domicilio</span>
                  </div>
              </div>
  
              <form class="contenedor_formulario contenedor_formulario_crearProducto" enctype="multipart/form-data" id="crearProducto"
                  action="/registroProducto" method="POST">
  
                  <div class="contenedor_departamento contenedor_formulario_bloque">
                    <label for="departamento">Departamento</label>
                    <select class="contenedor_formulario_bloque_select" id="departamento" name="departamento" required>
                        <option value = "">Selecciona tu departamento</option>
                        <option value = "Amazonas">Amazonas</option>
                        <option value = "Antioquia">Antioquia</option>
                        <option value = "Arauca">Arauca</option>
                        <option value = "Atlántico">Atlántico</option>
                        <option value = "Bolívar">Bolívar</option>
                        <option value = "Boyacá">Boyacá</option>
                         <option value = "Caldas">Caldas</option>
                        <option value = "Caquetá">Caquetá</option>
                        <option value = "Casanare">Casanare</option>
                        <option value = "Cauca">Cauca</option>
                        <option value = "Cesar">Cesar</option>
                        <option value = "Chocó">Chocó</option>		            
                        <option value = "Córdoba">Córdoba</option>
                        <option value = "Cundinamarca">Cundinamarca</option>
                        <option value = "Guainía">Guainía</option>
                         <option value = "Guaviare">Guaviare</option>
                        <option value = "Huila">Huila</option>
                        <option value = "La Guajira">La Guajira</option>
                        <option value = "Magdalena">Magdalena</option>
                         <option value = "Meta">Meta</option>
                        <option value = "Nariño">Nariño</option>
                        <option value = "Norte de Santander">Norte de Santander</option>
                        <option value = "Putumayo">Putumayo</option>                
                        <option value = "Quindío">Quindío</option>  
                         <option value = "Risaralda">Risaralda</option>
                        <option value = "San Andrés y Providencia">San Andrés y Providencia</option>
                        <option value = "Santander">Santander</option>
                        <option value = "Sucre">Sucre</option>
                        <option value = "Tolima">Tolima</option>
                        <option value = "Valle del Cauca">Valle del Cauca</option>
                        <option value = "Vaupés">Vaupés</option>
                        <option value = "Vichada">Vichada</option>
                    </select>
               </div>
  
                  <div class="contenedor_municipio contenedor_formulario_bloque">
                      <label for="municipio">
                          Municipio
                      </label>
                      <input class="contenedor_municipio_input contenedor_formulario_input" type="text" id="municipio"
                          name="municipio" required placeholder="Cali" />
                  </div>
  
                  <div class="contenedor_barrio contenedor_formulario_bloque">
                      <label for="barrio">
                          Barrio
                      </label>
                      <input class="contenedor_barrio_input contenedor_formulario_input" type="text" id="barrio"
                          name="barrio" required placeholder="Alamos" />
                  </div>
  
                  <div class="contenedor_cantidad_producto contenedor_formulario_bloque">
                      <label for="direccion">
                          Direccion
                      </label>
                      <input class="contenedor_direccion_input contenedor_formulario_input" type="text"
                          id="direccion" name="direccion" required placeholder="Calle 59 # 2an 36" />
                  </div>
  
                  <div class="contenedor_descripcion contenedor_formulario_bloque">
                      <label for="descripcion">
                          Descripcion
                      </label>
                      <input class="contenedor_descripcion_input contenedor_formulario_input" type="text"
                          id="descripcion" name="descripcion" required placeholder="Casa - apartamento - numero de apartamento - nombre de unidad" />
                  </div>
  
                  <div class="contenedor_telefono contenedor_formulario_bloque">
                      <label for="telefono">
                          Telefono
                      </label>
                      <input class="contenedor_telefono_input contenedor_formulario_input" type="text"
                          id="telefono" name="telefono" required placeholder="3167882033" />
                  </div>
  
                   
                  <div class="contenedor_botones">
                      <button type="submit" class="contenedor_botones_input">Guardar</button>
                  </div>
  
              </form>
  
          </div>
  )
}