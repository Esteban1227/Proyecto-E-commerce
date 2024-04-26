import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import "./MenuUser.css" 
import { Link } from 'react-router-dom';
import { useLoginAndLogout } from '../../hooks/useLoginAndLogout';

export default function MenuUser({openMenu}) {
  const { handleLogout } = useLoginAndLogout()
  return (
    <div className={openMenu === 'usuario' ? "contenedor_usuario animate__animated  animate__fadeIn animate__faster" : "inactivo"}>
            <Link to={"/Tienda/EditarInforamcion"} className='contenedor_usuario_mi_cuenta'>
                  <FaUserAlt size={"20px"} style={{ color: "#26b1e7"}}/>
                  <span className="contenedor_usuario_mi_cuenta_span">Mi cuenta</span>
            </Link>
        <div className="contenedor_usuario_cerrar_sesion" onClick={handleLogout}>
            <IoLogOut size={"25px"} style={{ color: "#26b1e7"}}/>
            <span className="contenedor_usuario_cerrar_sesion_span">Cerrar sesion</span>
        </div>
    </div>
  )
}
