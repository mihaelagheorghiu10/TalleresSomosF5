import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/SomosF5.png';
import style from './Navbar.module.css';
import "./nav.css"

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={style.NavbarContainer}>
      <div className={style.divLogo}>

        <Link to="/" className={style.logoLink}>

          <img className={style.imgLogo} src={logo} alt="SomosF5" />

        </Link>
      </div>



      <nav style={{ position: "relative" }}>
        <ul >
          <li>
            <Link to="/itinerarios">Itinerarios</Link>
          </li>
          <li>
            <Link to="/empresas">Empresas</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/sobre-f5">Sobre F5</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>



      </nav>
      <div  className={isMobile ? "open": "close"}>
        <Link to="/itinirario">Itinirario</Link>
        <Link to="/empresas">Empresas</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/sobre-f5">Sobre F5</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </div>
  );

}