import React from 'react'
import style from './homePage.module.css'

function HomePage() {
  return (
    <div className={style.HomePageConteiner}>
      <div className={style.text1HomePage}>
        <h1 className={style.title1}>Aqui</h1>
        <h1 className={style.title2}>
          empieza el viaje hacia tu talento digital
        </h1>
        <h1 className={style.title1}>#Rompemosloscodigos</h1>
      </div>
      <div className={style.eventCardsHomePage}>
        <div className={style.eventCard1}>Talleres HTML y CSS</div>
        <div className={style.eventCard2}>Talleres React</div>
        <div className={style.eventCard3}>Talleres Java Script</div>
        <div className={style.eventCard4}>Talleres Metaverso</div>
      </div>
      <div className={style.text2HomePage}></div>
    </div>
  )
}

export default HomePage
