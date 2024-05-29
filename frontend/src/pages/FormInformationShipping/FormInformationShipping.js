import React, { useState } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import "./FormInformationShipping.css";
import { toast } from "sonner";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function FormInformationShipping() {
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [barrio, setBarrio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  const { userId } = useLoginAndLogout();
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = {
        departamento: departamento,
        municipio: municipio,
        barrio: barrio,
        direccion: direccion,
        descripcion: descripcion,
        telefono: telefono,
        idUsuario: userId,
      };

      const response = await axios.post(
        "http://127.0.0.1:5000/api/post/CreateAddress",
        formData
      );

      // Verificar si la creación del producto fue exitosa
      if (response.status === 200) {
        toast.success("Direccion creada con exito");
        navigate(-1);
      } else {
        // Maneja el caso de error
        toast.error("No se a podido crear la direccion");
      }
    } catch (error) {
      toast.error("No se a podido crear la direccion");
    }
  }

  return (
    <section className="contenedor_principal formulario">
      <div className="line">
        <h2> Informacion Domicilio</h2>
      </div>
      <form
        className="contenedor_formulario"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="contenedor_departamento contenedor_formulario_bloque">
          <label for="departamento">Departamento</label>
          <select
            onChange={(event) => setDepartamento(event.target.value)}
            required
          >
            <option value="">Selecciona tu departamento</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Arauca">Arauca</option>
            <option value="Atlántico">Atlántico</option>
            <option value="Bolívar">Bolívar</option>
            <option value="Boyacá">Boyacá</option>
            <option value="Caldas">Caldas</option>
            <option value="Caquetá">Caquetá</option>
            <option value="Casanare">Casanare</option>
            <option value="Cauca">Cauca</option>
            <option value="Cesar">Cesar</option>
            <option value="Chocó">Chocó</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cundinamarca">Cundinamarca</option>
            <option value="Guainía">Guainía</option>
            <option value="Guaviare">Guaviare</option>
            <option value="Huila">Huila</option>
            <option value="La Guajira">La Guajira</option>
            <option value="Magdalena">Magdalena</option>
            <option value="Meta">Meta</option>
            <option value="Nariño">Nariño</option>
            <option value="Norte de Santander">Norte de Santander</option>
            <option value="Putumayo">Putumayo</option>
            <option value="Quindío">Quindío</option>
            <option value="Risaralda">Risaralda</option>
            <option value="San Andrés y Providencia">
              San Andrés y Providencia
            </option>
            <option value="Santander">Santander</option>
            <option value="Sucre">Sucre</option>
            <option value="Tolima">Tolima</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
            <option value="Vaupés">Vaupés</option>
            <option value="Vichada">Vichada</option>
          </select>
        </div>

        <div className="contenedor_municipio contenedor_formulario_bloque">
          <label for="municipio">Municipio</label>
          <input
            className="contenedor_municipio_input "
            type="text"
            id="municipio"
            name="municipio"
            required
            placeholder="Cali"
            onChange={(event) => setMunicipio(event.target.value)}
          />
        </div>

        <div className="contenedor_barrio contenedor_formulario_bloque">
          <label for="barrio">Barrio</label>
          <input
            className="contenedor_barrio_input "
            type="text"
            id="barrio"
            name="barrio"
            required
            onChange={(event) => setBarrio(event.target.value)}
            placeholder="Alamos"
          />
        </div>

        <div className="contenedor_cantidad_producto contenedor_formulario_bloque">
          <label for="direccion">Direccion</label>
          <input
            className="contenedor_direccion_input "
            type="text"
            id="direccion"
            name="direccion"
            required
            onChange={(event) => setDireccion(event.target.value)}
            placeholder="Calle 59 # 2an 36"
          />
        </div>

        <div className="contenedor_descripcion contenedor_formulario_bloque">
          <label for="descripcion">Descripcion</label>
          <input
            className="contenedor_descripcion_input "
            type="text"
            id="descripcion"
            name="descripcion"
            required
            onChange={(event) => setDescripcion(event.target.value)}
            placeholder="Casa - apartamento - numero de apartamento - nombre de unidad"
          />
        </div>

        <div className="contenedor_telefono contenedor_formulario_bloque">
          <label for="telefono">Telefono</label>
          <input
            className="contenedor_telefono_input "
            type="text"
            id="telefono"
            name="telefono"
            required
            onChange={(event) => setTelefono(event.target.value)}
            placeholder="3167882033"
          />
        </div>

        <ButtonPrimary type={"submit"}>Crear Direccion</ButtonPrimary>
      </form>
    </section>
  );
}
