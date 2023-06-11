import React from 'react'
import style from './footer.module.css'
import logo from '../../assets/SomosF5.png'
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from '../../../node_modules/react-icons/ai'
// import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={style.footerSection}>
      <div className={style.footerPageConteiner}>
        <div className={style.divLogo}>
          <img className={style.imgLogo} src={logo} alt="SomosF5.png"></img>
          <p>Fundacion Somos F5</p>
          <p>Avinguda Bogatell, 82 Bajos</p>
          <p>Barcelona, 08005</p>
          <p>info@somosf5.org</p>
        </div>

        <div className={style.footerLinksBox}>
          <div className={style.linksItem}>
            <h3>Apuntate</h3>
            <p>Talleres</p>
            <p>Formaciones</p>
          </div>
          <div className={style.linksItem}>
            <h3>Partners</h3>
            <p>Colabora</p>
            <p>Contrata talento</p>
          </div>
          <div className={style.linksItem}>
            <h3>La Fundacion</h3>
            <p>Sobre F5</p>
            <p>Contactanos</p>
          </div>
        </div>

        <div className={style.socialMediaLogos}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className={style.footerB}>
        <h4 className={style.footerB.title1}>
          SOMOSF5@TODOSLOSDERECHOSRESERVADOS
        </h4>
        <h4 className={style.footerB.title2}>Politica de privacidad</h4>
        <h4 className={style.footerB.title3}>Politica de cookies</h4>
      </div>
    </div>
  )
}
