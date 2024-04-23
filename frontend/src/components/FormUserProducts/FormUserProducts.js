import React from "react";
import "./FormUserProducts.css";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FormUserProducts() {
  return (
    <div className="contenedor_productosUser">
      <div className="contenedor_productosUser_producto">
        <img src="" alt="producto" />
        <div className="contenedor_productosUser_producto_informacion">
          <span className="contenedor_productosUser_producto_informacion--nombre">
            TIG Antorcha 150 A Elite 10 / 25
          </span>
          <span className="contenedor_productosUser_producto_informacion--precio">
            $200.000
          </span>
        </div>
        <div>
            <Link to={"/Tienda/EditarInformacionProudcto"}>
                <FaEdit size={"20px"} color="#26b1e7"/>
            </Link>
        </div>
      </div>
    </div>
  );
}
