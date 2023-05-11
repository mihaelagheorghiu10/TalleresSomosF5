import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoSomosF5.png';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={style.NavbarContainer}>
      <div className={style.divLogo}>
        <img className={style.imgLogo} src={logo} alt="logoSomosF5" />
    </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
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
      </nav>
    </div>
  );
}
