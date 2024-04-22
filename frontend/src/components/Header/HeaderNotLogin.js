import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/SEV-TECHNOLOGY.png"

export default function HeaderrNotLogin() {
  return (
    <header className="header" >
        <div className="header_logo">
          <Link to={"/Tienda/VerificarCompra"} className='header_logo_notLogin'>
            <img src={logo} alt='Logo SEV-TECHNLOGY'></img>
            <span>SEV-TECHNOLOGY</span>
          </Link>
        </div>
      </header>  
  )
}
