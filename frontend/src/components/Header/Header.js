import React, { useState, useEffect, useRef } from "react";
import { BsCartFill } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import "animate.css";
import { Link } from "react-router-dom";
import CartMenu from "../CartMenu/CartMenu";
import MenuUser from "../MenuUser/MenuUser";
import logo from "../../assets/SEV-TECHNOLOGY.png";
import { useSearch } from "../../hooks/useSearch";

function Header() {
  const [openMenu, setOpenMenu] = useState(null); // Estado para rastrear el menú abierto

  const cartRef = useRef(null); // Ref para el contenedor principal del encabezado
  const userRef = useRef(null); // Ref para el contenedor principal del encabezado

  // Función para manejar el clic fuera del menú
  const handleOutsideClick = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      userRef.current &&
      !userRef.current.contains(event.target)
    ) {
      setOpenMenu(null);
    }
  };

  // Agregar el manejador de eventos al montar el componente
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const { setSearchTerm, searchTerm } = useSearch()

  return (
    <header className="header">
      <Link to={"/"} className="header_logo">
        <img src={logo} alt="Logo SEV-TECHNLOGY" />
      </Link>
      <div className="header_buscador">
        <input
          type="text"
          className="header_buscador_input"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="header_buscador_icono">
          <FaSearch className=""/>
        </button>
      </div>
      <div className="header_botones">
        <div className="header_botones_menuProducto">
          <Link to={"/Tienda/CrearProducto"}>
            <HiMiniSquaresPlus size={"25px"} style={{ color: "#ffffff" }} />
          </Link>
        </div>
        <div className="header_botones_menuUser" ref={userRef}>
          <div
            onClick={() => toggleMenu("usuario")}
            className="header_botones_menuUser__boton"
          >
            <BiSolidUserCircle size={"25px"} style={{ color: "#ffffff" }} />
          </div>
          <MenuUser openMenu={openMenu} />
        </div>
        <div className="header_botones_menuCarrito" ref={cartRef}>
          <div
            onClick={() => toggleMenu("carrito")}
            className="header_botones_menuCarrito_boton"
          >
            <BsCartFill size={"25px"} style={{ color: "#ffffff" }} />
          </div>
          <CartMenu openMenu={openMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
