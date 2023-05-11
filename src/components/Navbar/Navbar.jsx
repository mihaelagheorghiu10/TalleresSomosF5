import React from 'react';
import logo from '../../assets/logoSomosF5.png'; 
import style from './Navbar.module.css';

export default function Navbar() {

  return (

    <div className={style.NavbarContainer}>
      <div className={style.divLogo}>
        <img className={style.imgLogo} src={logo} alt="logoSomosF5"/>
      </div>
    </div>
   

   
  )
}

