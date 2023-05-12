import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/SomosF5.png';
import style from './Navbar.module.css';


export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   
    return (
    <div className={style.NavbarContainer}>
      <div className={style.divLogo}>
         <a href="/" className={style.logoLink}>
        <img className={style.imgLogo} src={logo} alt="SomosF5" />
         </a>
    </div>

    <input
    type="checkbox"
    id="menu-toggle"
    checked={menuOpen}
    onChange={() => setMenuOpen(!menuOpen)}
  />
  <label htmlFor="menu-toggle" className={style.menuIcon}>
    &#9776;
  </label>

  {menuOpen && (


     <nav>
        <ul>
         
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
  )}
    </div>
  );
}
