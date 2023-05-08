import React from 'react'
import style from './footer.module.css'
import logo from '../../assets/logoSomosF5.png'
import {
  AiFillTwitterCircle,
  AiFillInstagram,
} from '../../../node_modules/react-icons/ai'
// import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={style.footerSection}>
      <div className={style.footerPageConteiner}>
        <div className={style.divLogo}>
          <img className={style.imgLogo} src={logo} alt="logoSomosF5.png"></img>
          {/* </div> */}
          <p>Fundacion Somos F5</p>
          <p>Avinguda Bogatell, 82 Bajos</p>
          <p>Barcelona, 08005</p>
        </div>

        {/* <Link className={style.link} to={'/register'}>
          <p>Regístrate</p>
        </Link>
        <Link className={style.link} to={'/login'}>
          <p>Inicia sesión</p>
        </Link>
        <p>Ayuda</p> */}
      </div>
      <div className={style.footerB}>
        <p>Síguenos</p>
        <div className={style.socialMediaLogos}>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}
