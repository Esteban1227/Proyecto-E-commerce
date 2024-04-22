import React, { useState, useEffect, useRef } from 'react';
import { BsCartFill } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { BiSolidUserCircle } from "react-icons/bi";
import "./Header.css";
import 'animate.css';
import { Link } from "react-router-dom";
import CartMenu from "../CartMenu/CartMenu";
import MenuUser from "../MenuUser/MenuUser";
import logo from "../../assets/SEV-TECHNOLOGY.png"

function Header({onLogout}) {
  const [openMenu, setOpenMenu] = useState(null); // Estado para rastrear el menú abierto

  const cartRef = useRef(null); // Ref para el contenedor principal del encabezado
  const userRef = useRef(null); // Ref para el contenedor principal del encabezado

  // Función para manejar el clic fuera del menú
  const handleOutsideClick = (event) => {
    if ((cartRef.current && !cartRef.current.contains(event.target)) &&  (userRef.current && !userRef.current.contains(event.target))) {
      setOpenMenu(null);
    }
  };

  // Agregar el manejador de eventos al montar el componente
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  }

  return (
    <header className="header" >
      <div className="header_logo">
        <Link to={"/Tienda/EditarInformacionProudcto"}>
          <img src={logo} alt='Logo SEV-TECHNLOGY'></img>
        </Link>
      </div>
      <div className="header_buscador">
        <input
          type="text"
          className="header_buscador_input"
          placeholder="Type your text"
        />
        <button className="header_buscador_button">
          <svg
            className="header_buscador_icono"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="header_botones">
        <div className="header_botones_menuProducto">
          <Link to={"/Tienda/CrearProducto"}>
            <HiMiniSquaresPlus size={"25px"} style={{ color: "#ffffff"}}/>
          </Link>
        </div>
        <div className="header_botones_menuUser" ref={userRef}>
          <div onClick={() => toggleMenu('usuario')}  className="header_botones_menuUser__boton">
            <BiSolidUserCircle size={"25px"} style={{ color: "#ffffff"}}/>
          </div>
            <MenuUser openMenu={openMenu} onLogout={onLogout}/>
        </div>
        <div className="header_botones_menuCarrito" ref={cartRef}>
          <div  onClick={() => toggleMenu('carrito')} className="header_botones_menuCarrito_boton">
            <BsCartFill size={"25px"} style={{ color: "#ffffff" }} />
          </div>
          <CartMenu openMenu={openMenu}/>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
