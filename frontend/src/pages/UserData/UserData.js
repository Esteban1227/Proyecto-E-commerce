import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserData.css";
import FormChangeUserData from "../../components/FormChangeUserData/FormChangeUserData";
import FormUserProducts from "../../components/FormUserProducts/FormUserProducts";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";

export default function UserData() {
  const [data, setData] = useState([]);
  const [formularioActivo, setFormularioActivo] = useState("miCuenta");
  const { userId } = useLoginAndLogout()

  function mostrarFormulario(formulario) {
    setFormularioActivo(formulario);
  }

  useEffect(() => {
    async function handleData() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/get/usuarios/${userId}`
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
        <section key={user.id} className="contenedor_principal formulario">
          <div className="contenedor_bienvenida_mi_cuenta">
            <h3 className="contenedor_bienvenida_mi_cuenta_h3">Bienvenid@</h3>
            <span className="contenedor_bienvenida_mi_cuenta_s">{user.nombre + " " + user.apellido}</span>
          </div>
          <div className="contenedor_principal_selector">
            <div 
              className={`contenedor_principal_selector_miCuenta ${formularioActivo === "miCuenta" ? "activo" : ""}`}
              onClick={() => mostrarFormulario("miCuenta")}
            >
              <span>Mi Cuenta</span>
            </div>
            <div 
              className={`contenedor_principal_selector_misProductos ${formularioActivo === "misProductos" ? "activo" : ""}`}
              onClick={() => mostrarFormulario("misProductos")}
              >
              <span>Mis Productos</span>
            </div>
          </div>
          {formularioActivo === "miCuenta" ? (<FormChangeUserData user={user}/>) : <FormUserProducts />}
        </section>
      ))}
    </React.Fragment>
  );
}
